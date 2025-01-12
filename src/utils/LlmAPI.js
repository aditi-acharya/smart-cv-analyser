import { HfInference } from "@huggingface/inference";

const inference = new HfInference("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");

// Function to make the API call
export const fetchLLMResponse = async (prompts) => {
  try {
    const responses = await Promise.all(
      prompts.map(async (prompt) => {
        const chunks = [];
        for await (const chunk of inference.chatCompletionStream({
          model: "meta-llama/Meta-Llama-3-8B-Instruct",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 345,
        })) {
          chunks.push(chunk.choices[0]?.delta?.content || "");
        }
        return chunks.join("");
      })
    );
    return responses;
  } catch (error) {
    console.error("Error fetching LLM response:", error);
    throw error;
  }
};
