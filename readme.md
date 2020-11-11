## jest-terser-oom


```
$ yarn && yarn test
```

You'll see the following error

![](https://gw.alipayobjects.com/zos/antfincdn/zQuYAlNo6C/cfa9e489-7644-446c-9900-65ae91415a6a.png)

If you disable `transformIgnorePatterns`, will success.

![](https://gw.alipayobjects.com/zos/antfincdn/%26ykivalxwH/8ea2289b-16e4-4f82-993e-f8da3ae6ee7c.png)

Or remove `sourceMappingURL` in `node_modules/terser/dist/bundle.min.js`, will success too.

![](https://gw.alipayobjects.com/zos/antfincdn/amOJi5BpQ5/f84ac68c-888a-4373-a34d-cfaa089e1b3a.png)
