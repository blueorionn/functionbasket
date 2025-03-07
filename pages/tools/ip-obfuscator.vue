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
const ip_hex = ref("7F.00.00.01");
const ip_oct = ref("0177.0000.0000.0001");
const ip_bin = ref("01111111000000000000000000000001");
const ip_dot_bin = ref("01111111.00000000.00000000.00000001");

function convert() {
  // Check validity of IPv4 address
  hasError.value = !isIPv4AddressValid(text.value);

  if (!hasError.value) {
    ip_int.value = convertToInt(text.value);
    ip_hex.value = convertToHex(text.value);
    ip_oct.value = convertToOct(text.value);
    ip_bin.value = convertToBin(text.value);
    ip_dot_bin.value = convertToDottedBin(text.value);
    ipv6_short.value = `::FFFF:${convertToIPv6(text.value)}`;
    ipv6_long.value = `0000:0000:0000:0000:0000::FFFF:${convertToIPv6(text.value)}`;
  }
}

function isIPv4AddressValid(ip: string) {
  // An IPv4 address has 4 octets
  if (ip.split(".").length !== 4) return false;

  // Each octet should be in range 0-255
  for (let index = 0; index < ip.split(".").length; index++) {
    const octet = ip.split(".")[index];
    if (isNaN(parseInt(octet))) return false;
    if (parseInt(octet) > 255 || parseInt(octet) < 0) return false;
  }

  return true;
}

function convertToIPv6(ip: string) {
  const octets = ip.split(".");

  const hex_octets = octets.reduce(
    (previousValue: string, currentValue: string, currentIndex: number) => {
      const ox = parseInt(currentValue);

      if (currentIndex === 0)
        return `${zeroPad(ox.toString(16))}`.toUpperCase();
      return `${previousValue}.${zeroPad(ox.toString(16)).toUpperCase()}`;
    },
    ""
  );
  const hex_code = hex_octets.split(".");

  return `${hex_code[0]}${hex_code[1]}:${hex_code[2]}${hex_code[3]}`;
}

function convertToInt(ip: string) {
  const octets = ip.split(".").reverse();
  const ip_int = octets.reduce(
    (previousValue: string, currentValue: string, currentIndex: number) => {
      const ox = parseInt(currentValue) * 256 ** currentIndex;
      if (isNaN(parseInt(previousValue))) return `${ox}`;
      return `${parseInt(previousValue) + ox}`;
    },
    ""
  );

  return ip_int;
}

function convertToHex(ip: string) {
  const octets = ip.split(".");

  const ip_hex = octets.reduce(
    (previousValue: string, currentValue: string, currentIndex: number) => {
      const ox = parseInt(currentValue);

      if (currentIndex === 0)
        return `${zeroPad(ox.toString(16))}`.toUpperCase();
      return `${previousValue}.${zeroPad(ox.toString(16)).toUpperCase()}`;
    },
    ""
  );

  return ip_hex;
}

function convertToOct(ip: string) {
  const octets = ip.split(".");

  const ip_oct = octets.reduce(
    (previousValue: string, currentValue: string, currentIndex: number) => {
      const ox = parseInt(currentValue);

      if (currentIndex === 0)
        return `${zeroPad(ox.toString(8), 4)}`.toUpperCase();
      return `${previousValue}.${zeroPad(ox.toString(8), 4).toUpperCase()}`;
    },
    ""
  );

  return ip_oct;
}

function convertToBin(ip: string) {
  const octets = ip.split(".");

  const ip_bin = octets.reduce(
    (previousValue: string, currentValue: string, currentIndex: number) => {
      const ox = parseInt(currentValue);

      if (currentIndex === 0) return `${zeroPad(ox.toString(2), 8)}`;
      return `${previousValue}${zeroPad(ox.toString(2), 8)}`;
    },
    ""
  );

  return ip_bin;
}

function convertToDottedBin(ip: string) {
  const octets = ip.split(".");

  const ip_dot_bin = octets.reduce(
    (previousValue: string, currentValue: string, currentIndex: number) => {
      const ox = parseInt(currentValue);

      if (currentIndex === 0) return `${zeroPad(ox.toString(2), 8)}`;
      return `${previousValue}.${zeroPad(ox.toString(2), 8)}`;
    },
    ""
  );

  return ip_dot_bin;
}

// utility function
function zeroPad(num: number | string, places = 2) {
  return String(num).padStart(places, "0");
}
</script>
