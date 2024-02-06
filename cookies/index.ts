interface Cookie {
  getCookie(name: string): string | undefined
  setCookie(name: string, value: string, options: any): void
  deleteCookie(name: string): void
}

export class Cookies implements Cookie {
  /**
   * Get cookie
   * @param name
   * @returns an object with selected cookie value
   */
  getCookie(name: string) {
    const matches = document.cookie.match(
      new RegExp(
        `(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`
      )
    )

    return matches ? decodeURIComponent(matches[1]) : undefined
  }

  /**
   * Set cookie
   * @param name
   * @param value
   * @param options
   * This method has support for options.expire value as Date
   * or a number of seconds
   */
  setCookie(name: string, value: string, options: any = {}) {
    options = {
      path: '/',
      ...options,
    }
    if (options.expires) {
      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString()
      } else {
        const miliseconds = options.expires * 1000
        const expiresAt = new Date()

        expiresAt.setTime(expiresAt.getTime() + miliseconds)
        options.expires = expiresAt.toUTCString()
      }
    }

    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )}`

    Object.keys(options).forEach((key) => {
      updatedCookie += `; ${key}=${options[key]}; secure; SameSite=strict`
    })

    document.cookie = updatedCookie
  }

  /**
   * Delete cookie
   * @param name
   */
  deleteCookie(name: string) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }
}
