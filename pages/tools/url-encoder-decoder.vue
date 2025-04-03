<script setup lang="ts">
const pageData = getPageData("encoder-decoder", "URL Encoder-Decoder");

// Encoder/Decoder functionality
const inputText = ref("");
const outputText = ref("");
const selectedOption = ref("encode");

watch(inputText, () => {
  if (selectedOption.value === "encode") {
    outputText.value = encodeURIComponent(inputText.value);
  }
});

// copy button logic
const copyState = ref(false);
const copyHandler = () => {
  copyText(outputText.value);
  copyState.value = true;
  const timeOutId = setTimeout(() => (copyState.value = false), 500);

  return () => {
    clearTimeout(timeOutId);
  };
};
</script>

<template>
  <section class="mx-auto max-w-screen-xl px-4" aria-label="wrapper">
    <section class="py-12">
      <h1 class="cursor-default text-lg font-semibold text-gray-700 xl:text-xl">
        {{ pageData?.title }}
      </h1>
      <p class="my-4 text-base font-normal text-gray-800 xl:text-lg">
        {{ pageData?.description }}
      </p>
    </section>

    <!-- Encoder/Decoder -->
    <section class="mx-auto w-full max-w-4xl p-4">
      <div class="my-4 flex h-full w-full items-center justify-start gap-4">
        <input
          type="text"
          name="url-input"
          id="url-input"
          class="block w-full max-w-2xl rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="URL"
          v-model="inputText"
        />
        <select
          name="operation"
          id="operation"
          v-model="selectedOption"
          class="block w-full max-w-36 rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="encode">Encode</option>
          <option value="decode">Decode</option>
        </select>
      </div>
      <div class="my-4 flex h-full w-full items-center justify-start gap-4">
        <input
          type="text"
          name="output"
          id="output"
          v-model="outputText"
          class="block w-full max-w-2xl rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Output"
          disabled
        />
        <button
          type="button"
          :onclick="copyHandler"
          class="flex w-full items-center justify-center rounded bg-blue-500 px-2.5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-blue-300 sm:w-auto"
        >
          <span class="sr-only">Copy</span>
          <Transition name="fade">
            <Icon
              name="ic:baseline-content-copy"
              style="height: 1.15rem; width: 1.15rem; aspect-ratio: auto"
              v-if="!copyState"
            />
            <Icon
              name="ic:baseline-check"
              style="height: 1.15rem; width: 1.15rem; aspect-ratio: auto"
              v-else
            />
          </Transition>
        </button>
        <button
          type="button"
          class="flex w-full items-center justify-center rounded bg-blue-500 px-2.5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-blue-300 sm:w-auto"
        >
          <span class="sr-only">Delete</span>
          <Icon
            name="ic:outline-delete"
            style="height: 1.15rem; width: 1.15rem; aspect-ratio: auto"
          />
        </button>
      </div>
    </section>

    <!-- General Information -->
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s;
}

.fade-enter-from,
.fade-leave-to {
  display: none;
}
</style>
