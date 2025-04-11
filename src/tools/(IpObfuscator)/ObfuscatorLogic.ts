export type StateType = {
  input: string
  hasError: boolean
  ipv6Short: {
    name: 'IPv6 (short)'
    value: string
    copyState: boolean
  }
  ipv6Long: {
    name: 'IPv6 (long)'
    value: string
    copyState: boolean
  }
  ipInt: {
    name: 'Integer'
    value: string
    copyState: boolean
  }
  ipHex: {
    name: 'Hex'
    value: string
    copyState: boolean
  }
  ipOct: {
    name: 'Octal'
    value: string
    copyState: boolean
  }
  ipBin: {
    name: 'Binary'
    value: string
    copyState: boolean
  }
  ipDotBin: {
    name: 'Dotted Binary'
    value: string
    copyState: boolean
  }
}

export const INITIAL_STATE: StateType = {
  input: '127.0.0.1',
  hasError: false,
  ipv6Short: {
    name: 'IPv6 (short)',
    value: '::ffff:7f00:0001',
    copyState: false,
  },
  ipv6Long: {
    name: 'IPv6 (long)',
    value: '0000:0000:0000:0000:0000:ffff:7f00:0001',
    copyState: false,
  },
  ipInt: {
    name: 'Integer',
    value: '2130706433',
    copyState: false,
  },
  ipHex: {
    name: 'Hex',
    value: '7F.00.00.01',
    copyState: false,
  },
  ipOct: {
    name: 'Octal',
    value: '0177.0000.0000.0001',
    copyState: false,
  },
  ipBin: {
    name: 'Binary',
    value: '01111111000000000000000000000001',
    copyState: false,
  },
  ipDotBin: {
    name: 'Dotted Binary',
    value: '01111111.00000000.00000000.00000001',
    copyState: false,
  },
}

type Action =
  | { type: 'Set Input'; payload: string }
  | { type: 'Obfuscate Ip' }
  | {
      type: 'Copy Ip Format'
      name:
        | 'IPv6 (short)'
        | 'IPv6 (long)'
        | 'Integer'
        | 'Hex'
        | 'Octal'
        | 'Binary'
        | 'Dotted Binary'
      payload: boolean
    }

export function reducer(state: StateType, action: Action): StateType {
  if (action.type === 'Set Input') {
    return { ...state, input: action.payload }
  }

  if (action.type === 'Obfuscate Ip') {
    if (!isIPv4AddressValid(state.input)) return { ...state, hasError: true }

    return {
      ...state,
      ipv6Short: {
        ...state.ipv6Short,
        value: `::FFFF:${convertToIPv6(state.input)}`,
      },
      ipv6Long: {
        ...state.ipv6Long,
        value: `0000:0000:0000:0000:0000::FFFF:${convertToIPv6(state.input)}`,
      },
      ipInt: {
        ...state.ipInt,
        value: `${convertToInt(state.input)}`,
      },
      ipHex: {
        ...state.ipHex,
        value: `${convertToHex(state.input)}`,
      },
      ipOct: {
        ...state.ipOct,
        value: `${convertToOct(state.input)}`,
      },
      ipBin: {
        ...state.ipBin,
        value: `${convertToBin(state.input)}`,
      },
      ipDotBin: {
        ...state.ipDotBin,
        value: `${convertToDottedBin(state.input)}`,
      },
    }
  }

  if (action.type === 'Copy Ip Format') {
    switch (action.name) {
      case 'IPv6 (short)':
        return {
          ...state,
          ipv6Short: { ...state.ipv6Short, copyState: action.payload },
        }

      case 'IPv6 (long)':
        return {
          ...state,
          ipv6Long: { ...state.ipv6Long, copyState: action.payload },
        }

      case 'Integer':
        return {
          ...state,
          ipInt: { ...state.ipInt, copyState: action.payload },
        }

      case 'Hex':
        return {
          ...state,
          ipHex: { ...state.ipHex, copyState: action.payload },
        }

      case 'Octal':
        return {
          ...state,
          ipOct: { ...state.ipOct, copyState: action.payload },
        }

      case 'Binary':
        return {
          ...state,
          ipOct: { ...state.ipOct, copyState: action.payload },
        }

      case 'Dotted Binary':
        return {
          ...state,
          ipDotBin: { ...state.ipDotBin, copyState: action.payload },
        }

      default:
        return state
    }
  }

  return state
}

// conversion functions
const isIPv4AddressValid = (ip: string) => {
  // An IPv4 address has 4 octets
  if (ip.split('.').length !== 4) return false

  // Each octet should be in range 0-255
  for (let index = 0; index < ip.split('.').length; index++) {
    const octet = ip.split('.')[index]
    if (isNaN(parseInt(octet))) return false
    if (parseInt(octet) > 255 || parseInt(octet) < 0) return false
  }

  return true
}

const convertToIPv6 = (ip: string) => {
  const octets = ip.split('.')

  const hex_octets = octets.reduce(
    (previousValue: string, currentValue: string, currentIndex: number) => {
      const ox = parseInt(currentValue)

      if (currentIndex === 0) return `${zeroPad(ox.toString(16))}`.toUpperCase()
      return `${previousValue}.${zeroPad(ox.toString(16)).toUpperCase()}`
    },
    ''
  )
  const hex_code = hex_octets.split('.')

  return `${hex_code[0]}${hex_code[1]}:${hex_code[2]}${hex_code[3]}`
}

const convertToInt = (ip: string) => {
  const octets = ip.split('.').reverse()
  const ip_int = octets.reduce(
    (previousValue: string, currentValue: string, currentIndex: number) => {
      const ox = parseInt(currentValue) * 256 ** currentIndex
      if (isNaN(parseInt(previousValue))) return `${ox}`
      return `${parseInt(previousValue) + ox}`
    },
    ''
  )

  return ip_int
}

const convertToHex = (ip: string) => {
  const octets = ip.split('.')

  const ip_hex = octets.reduce(
    (previousValue: string, currentValue: string, currentIndex: number) => {
      const ox = parseInt(currentValue)

      if (currentIndex === 0) return `${zeroPad(ox.toString(16))}`.toUpperCase()
      return `${previousValue}.${zeroPad(ox.toString(16)).toUpperCase()}`
    },
    ''
  )

  return ip_hex
}

const convertToOct = (ip: string) => {
  const octets = ip.split('.')

  const ip_oct = octets.reduce(
    (previousValue: string, currentValue: string, currentIndex: number) => {
      const ox = parseInt(currentValue)

      if (currentIndex === 0)
        return `${zeroPad(ox.toString(8), 4)}`.toUpperCase()
      return `${previousValue}.${zeroPad(ox.toString(8), 4).toUpperCase()}`
    },
    ''
  )

  return ip_oct
}

const convertToBin = (ip: string) => {
  const octets = ip.split('.')

  const ip_bin = octets.reduce(
    (previousValue: string, currentValue: string, currentIndex: number) => {
      const ox = parseInt(currentValue)

      if (currentIndex === 0) return `${zeroPad(ox.toString(2), 8)}`
      return `${previousValue}${zeroPad(ox.toString(2), 8)}`
    },
    ''
  )

  return ip_bin
}

const convertToDottedBin = (ip: string) => {
  const octets = ip.split('.')

  const ip_dot_bin = octets.reduce(
    (previousValue: string, currentValue: string, currentIndex: number) => {
      const ox = parseInt(currentValue)

      if (currentIndex === 0) return `${zeroPad(ox.toString(2), 8)}`
      return `${previousValue}.${zeroPad(ox.toString(2), 8)}`
    },
    ''
  )

  return ip_dot_bin
}

// utility function
function zeroPad(num: number | string, places = 2) {
  return String(num).padStart(places, '0')
}
