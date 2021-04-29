# github-checkup

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

### Notes

- Tests not working because of jest/babel errors I didn't want to spend any more time on now
- Used Nuxt as the base for this project as it simplifies a comple of things, for example route and store handling a lot
  - => kept most of the structure here
- Tested on:
  - Mac: Safari, Firefox
  - Windows (via Browserstack): Edge 15 (and up), IE11, Chrome
- Using `data-fns` to parse the creation date
- Using `font-awesome` for icons
- Using `vuelidate` for form validation
- Using `axios` for API requests
- Using `@juliankern/vgrid` for the grid + responsive helpers, which is my own open source project

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
