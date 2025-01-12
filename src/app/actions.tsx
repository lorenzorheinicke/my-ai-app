'use server';

import { openai } from '@ai-sdk/openai';
import { CoreMessage, streamText } from 'ai';
import { createStreamableValue } from 'ai/rsc';

export async function continueConversation(messages: CoreMessage[]) {
  const result = await streamText({
    model: openai('gpt-4o-mini'),
    messages,
  });

  const data = { test: 'Hello Dude 🤠' };

  const stream = createStreamableValue(result.textStream);
  return { message: stream.value, data };
}
