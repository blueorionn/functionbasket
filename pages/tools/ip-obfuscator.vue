<template>
  <main class="w-full min-h-[100vh] overflow-x-hidden">
    <section class="max-w-screen-xl mx-auto px-4" aria-label="wrapper">
      <section class="py-12">
        <h1
          class="text-lg xl:text-xl font-semibold text-gray-700 cursor-default"
        >
          IP obfuscator
        </h1>
        <p class="my-4 text-base xl:text-lg font-normal text-gray-800">
          An IP obfuscator is a tool used to mask, hide, or manipulate an IP
          address to make it difficult to trace the original source. It is
          commonly used in cybersecurity, privacy protection, and ethical
          hacking to anonymize network activity.
        </p>
      </section>
      <section class="py-8">
        <div class="w-full flex justify-center items-start gap-2.5">
          <div class="max-w-96 w-full">
            <input
              type="text"
              name="ip"
              id="ip"
              placeholder="127.0.0.1"
              v-model="text"
              class="p-4 w-full rounded border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-blue-300"
            />
            <p class="py-1 text-sm text-red-500" v-if="hasError">
              Please enter a valid Ipv4 address
            </p>
          </div>
          <button
            type="button"
            @click="convert"
            class="p-4 px-6 rounded text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <span class="font-semibold text-gray-100 convert-button"
              >Convert</span
            >
          </button>
        </div>
        <div
          class="w-full mt-8 px-0 md:p-4 lg:p-8 grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-8"
        >
          <div>
            <h2 class="py-0.5 text-base font-semibold text-gray-700">
              IPv6 (short)
            </h2>
            <div
              class="relative w-full p-4 border rounded-sm bg-white border-gray-200"
            >
              <span class="text-gray-700">{{ ipv6_short }}</span>
              <button type="button" class="absolute right-[5%] my-auto">
                <span class="sr-only">Copy Button</span>
                <Icon
                  name="ic:baseline-content-copy"
                  style="
                    height: 1.25rem;
                    width: 1.25rem;
                    aspect-ratio: auto;
                    color: #a9a9a9;
                  "
                />
              </button>
            </div>
          </div>
          <div>
            <h2 class="py-0.5 text-base font-semibold text-gray-700">
              IPv6 (long)
            </h2>
            <div
              class="relative w-full p-4 border rounded-sm bg-white border-gray-200"
            >
              <span class="text-gray-700">{{ ipv6_long }}</span>
              <button type="button" class="absolute right-[5%] my-auto">
                <span class="sr-only">Copy Button</span>
                <Icon
                  name="ic:baseline-content-copy"
                  style="
                    height: 1.25rem;
                    width: 1.25rem;
                    aspect-ratio: auto;
                    color: #a9a9a9;
                  "
                />
              </button>
            </div>
          </div>
          <div>
            <h2 class="py-0.5 text-base font-semibold text-gray-700">
              Integer
            </h2>
            <div
              class="relative w-full p-4 border rounded-sm bg-white border-gray-200"
            >
              <span class="text-gray-700">{{ ip_int }}</span>
              <button type="button" class="absolute right-[5%] my-auto">
                <span class="sr-only">Copy Button</span>
                <Icon
                  name="ic:baseline-content-copy"
                  style="
                    height: 1.25rem;
                    width: 1.25rem;
                    aspect-ratio: auto;
                    color: #a9a9a9;
                  "
                />
              </button>
            </div>
          </div>
          <div>
            <h2 class="py-0.5 text-base font-semibold text-gray-700">Hex</h2>
            <div
              class="relative w-full p-4 border rounded-sm bg-white border-gray-200"
            >
              <span class="text-gray-700">{{ ip_hex }}</span>
              <button type="button" class="absolute right-[5%] my-auto">
                <span class="sr-only">Copy Button</span>
                <Icon
                  name="ic:baseline-content-copy"
                  style="
                    height: 1.25rem;
                    width: 1.25rem;
                    aspect-ratio: auto;
                    color: #a9a9a9;
                  "
                />
              </button>
            </div>
          </div>
          <div>
            <h2 class="py-0.5 text-base font-semibold text-gray-700">Octal</h2>
            <div
              class="relative w-full p-4 border rounded-sm bg-white border-gray-200"
            >
              <span class="text-gray-700">{{ ip_oct }}</span>
              <button type="button" class="absolute right-[5%] my-auto">
                <span class="sr-only">Copy Button</span>
                <Icon
                  name="ic:baseline-content-copy"
                  style="
                    height: 1.25rem;
                    width: 1.25rem;
                    aspect-ratio: auto;
                    color: #a9a9a9;
                  "
                />
              </button>
            </div>
          </div>
          <div>
            <h2 class="py-0.5 text-base font-semibold text-gray-700">Binary</h2>
            <div
              class="relative w-full p-4 border rounded-sm bg-white border-gray-200"
            >
              <span class="text-gray-700">{{ ip_bin }}</span>
              <button type="button" class="absolute right-[5%] my-auto">
                <span class="sr-only">Copy Button</span>
                <Icon
                  name="ic:baseline-content-copy"
                  style="
                    height: 1.25rem;
                    width: 1.25rem;
                    aspect-ratio: auto;
                    color: #a9a9a9;
                  "
                />
              </button>
            </div>
          </div>
          <div>
            <h2 class="py-0.5 text-base font-semibold text-gray-700">
              Dotted Binary
            </h2>
            <div
              class="relative w-full p-4 border rounded-sm bg-white border-gray-200"
            >
              <span class="text-gray-700">{{ ip_dot_bin }}</span>
              <button type="button" class="absolute right-[5%] my-auto">
                <span class="sr-only">Copy Button</span>
                <Icon
                  name="ic:baseline-content-copy"
                  style="
                    height: 1.25rem;
                    width: 1.25rem;
                    aspect-ratio: auto;
                    color: #a9a9a9;
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
.convert-button {
  font-family: "Space Grotesk", sans-serif;
}
</style>

<script setup lang="ts">
useSeoMeta({
  title: "IP obfuscator - Function Basket",
  description:
    "An IP obfuscator is a tool used to mask, hide, or manipulate an IP address to make it difficult to trace the original source. It is commonly used in cybersecurity, privacy protection, and ethical hacking to anonymize network activity.",
  ogTitle: "IP obfuscator - Function Basket",
  ogDescription:
    "An IP obfuscator is a tool used to mask, hide, or manipulate an IP address to make it difficult to trace the original source. It is commonly used in cybersecurity, privacy protection, and ethical hacking to anonymize network activity.",
  ogImage: "https://www.functionbasket.com/favicon.ico",
  twitterCard: "summary",
  twitterTitle: "IP obfuscator - Function Basket",
  twitterDescription:
    "An IP obfuscator is a tool used to mask, hide, or manipulate an IP address to make it difficult to trace the original source. It is commonly used in cybersecurity, privacy protection, and ethical hacking to anonymize network activity.",
  twitterImage: "https://www.functionbasket.com/favicon.ico",
});

// Conversion Logic
const text = ref("");
const hasError = ref(false);

// Conversion formats
const ipv6_short = ref("::ffff:7f00:0001");
const ipv6_long = ref("0000:0000:0000:0000:0000:ffff:7f00:0001");
const ip_int = ref("2130706433");
const ip_hex = ref("0XC0.0X2.0X2.0X8");
const ip_oct = ref("0177.0000.0000.0001");
const ip_bin = ref("11000000000000100000001000001000");
const ip_dot_bin = ref("11000000.00000010.00000010.00001000");

function convert() {
  checkValidity(text.value);
}

// Check ipv4 validity
function checkValidity(ip: string) {
  // reseting hasError variable
  hasError.value = false;

  // valid ipv4 has 4 octets
  hasError.value = (ip.split(".").length === 4);

  // checking range of octet
  const octets = ip.split(".");
  octets.forEach((octet) => {
    try {
      const intOctet = parseInt(octet);

      if (intOctet < 255 || intOctet > 0) {
        hasError.value = false;
      } else {
        hasError.value = true;
      }
    } catch (error) {
      hasError.value = true;
    }
  });
}
</script>
