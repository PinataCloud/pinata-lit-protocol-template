## Getting Started

This is the TypeScript + Tailwind CSS boilerplate Pinata starter template + the Lit Protocol SDK to enable encrypted file sharing.

You can edit the `pages/index.js` file and the API route file `pages/api/files` to see the Pinata functionality and extend it or make changes.

## Encryption

All the encryption pieces are located in the `index.tsx` file under the `uploadFile()` function. The most important part to take note of is the `accs` array which determines who can unlock the files. it will look something like this: 

```javascript
const accs = [
  {
    contractAddress: '',
    standardContractType: '',
    chain: 'ethereum',
    method: 'eth_getBalance',
    parameters: [':userAddress', 'latest'],
    returnValueTest: {
      comparator: '>=',
      value: '0',
    },
  },
];
```

With its current implementation the only thing required to decrypt the file is to have a balance greater than 0. This is just a proof of concept and can be changed to whatever you want. For more info on different access controls check out the [Lit Protocol Documentation](https://developer.litprotocol.com/v3/sdk/access-control/evm/basic-examples).

### Environment Variables

This project makes use of both public and private environment variables. The private environment variables are used to protect sensitive data like your Pinata API keys. The public environment variables are convenient central variable housing.

Read more about [how environment variables work with Next.js here](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables).

There is a `.env.sample` file you can copy and rename to `.env.local` for use in your project. Be sure to fill out the environment variable values in the `.env.local` file with your actual values.

It should look something like this:

```
PINATA_JWT=
NEXT_PUBLIC_GATEWAY_URL=
```

You can find out how to create your Pinata JWT [here](https://docs.pinata.cloud/docs/api-keys) and your Gateway URL [here](https://docs.pinata.cloud/docs/gateways-page). The Gateway URL format should be `https://mygateway.mypinata.cloud`.

### Learn More

For more information about building apps with Pinata and IPFS, check out the following resources:

- [Pinata Docs](https://docs.pinata.cloud)
- [Pinata Tutorials](https://medium.com/pinata)
- [Quick Start Recipes](https://docs.pinata.cloud/recipes)
