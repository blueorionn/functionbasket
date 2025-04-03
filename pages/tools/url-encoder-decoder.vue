<script setup lang="ts">
const pageData = getPageData('encoder-decoder', 'URL Encoder-Decoder')

// Encoder/Decoder functionality
const inputText = ref('')
const outputText = ref('')
const selectedOption = ref('encode')

watch(inputText, () => {
  if (selectedOption.value === 'encode') {
    outputText.value = encodeURIComponent(inputText.value)
  }
})

// copy button logic
const copyState = ref(false)
const copyHandler = () => {
  copyText(outputText.value)
  copyState.value = true
  const timeOutId = setTimeout(() => (copyState.value = false), 500)

  return () => {
    clearTimeout(timeOutId)
  }
}
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
    <section
      class="flex w-full flex-col items-start justify-between gap-4 p-4 lg:gap-16 xl:flex-row xl:gap-8 xl:py-8"
    >
      <section class="w-full xl:w-[50%]">
        <h2 class="my-4 text-xl font-semibold text-gray-600">
          What is URL encoding?
        </h2>
        <p class="my-2.5 text-lg font-normal text-gray-700">
          URL Encoding (also known as percent-encoding) is a method to encode
          arbitrary data in a uniform resource identifier (URI) using only the
          ASCII characters legal within a URI.
        </p>
        <p class="my-2.5 text-lg font-normal text-gray-700">
          URLs are designed to use characters from the ASCII character set.
          Because URLs often need to include characters outside this set (like
          spaces or non-ASCII characters), or characters with special meaning
          within the URL syntax, URL encoding is necessary.
        </p>
        <h2 class="my-4 text-lg font-semibold text-gray-600">
          Reserved Characters
        </h2>
        <p class="my-2.5 text-lg font-normal text-gray-700">
          <a
            href="https://datatracker.ietf.org/doc/html/rfc3986"
            target="_blank"
            rel="noreferrer noopener"
            class="text-blue-500"
            >RFC 3986
          </a>
          defines "reserved characters" as those that have special meaning
          within the URL syntax. These characters must be encoded when they
          appear as data within a URL component, to prevent them from being
          misinterpreted as URL syntax.
        </p>
        <table
          class="my-4 w-full text-left text-sm text-gray-500 rtl:text-right"
        >
          <tbody>
            <tr class="border border-gray-200 bg-gray-100">
              <td class="border-r border-gray-300 p-2.5">!</td>
              <td class="border-r border-gray-300 p-2.5">@</td>
              <td class="border-r border-gray-300 p-2.5">#</td>
              <td class="border-r border-gray-300 p-2.5">$</td>
              <td class="border-r border-gray-300 p-2.5">&</td>
              <td class="border-r border-gray-300 p-2.5">'</td>
              <td class="border-r border-gray-300 p-2.5">(</td>
              <td class="border-r border-gray-300 p-2.5">)</td>
              <td class="border-r border-gray-300 p-2.5">*</td>
              <td class="border-r border-gray-300 p-2.5">+</td>
              <td class="border-r border-gray-300 p-2.5">,</td>
              <td class="border-r border-gray-300 p-2.5">/</td>
              <td class="border-r border-gray-300 p-2.5">:</td>
              <td class="border-r border-gray-300 p-2.5">;</td>
              <td class="border-r border-gray-300 p-2.5">=</td>
              <td class="border-r border-gray-300 p-2.5">?</td>
              <td class="border-r border-gray-300 p-2.5">[</td>
              <td class="p-2.5">]</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="w-full xl:w-[50%]">
        <h2 class="my-4 text-xl font-semibold text-gray-600">
          How URL-Encoding works?
        </h2>
        <h3 class="my-2.5 text-lg font-semibold text-gray-600">
          ASCII Characters:
        </h3>
        <ul class="mx-4 list-disc text-lg">
          <li class="py-1.5">
            These characters, as defined by RFC 3986, have special meaning
            within the URL structure.
          </li>
          <li class="py-1.5">
            When they need to be treated as data (not as URL syntax), they are
            converted to their corresponding ASCII hexadecimal representation.
          </li>
          <li class="py-1.5">
            The two hexadecimal digits of the ASCII value are then prefixed with
            a percent sign (<span class="rounded bg-gray-200 px-0.5">%</span>).
          </li>
        </ul>
        <h3 class="my-2.5 text-lg font-semibold text-gray-600">
          Non-ASCII Characters:
        </h3>
        <ul class="mx-4 list-disc text-lg">
          <li class="py-1.5">
            These characters fall outside the standard ASCII range.
          </li>
          <li class="py-1.5">
            They are first encoded into their UTF-8 byte representation.
          </li>
          <li class="5 py-1">
            Each byte of the UTF-8 representation is then converted into its
            hexadecimal equivalent.
          </li>
          <li class="py-1.5">
            Each hexadecimal byte is prefixed with a percent sign (<span
              class="rounded bg-gray-200 px-0.5"
              >%</span
            >).
          </li>
        </ul>
      </section>
    </section>
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
