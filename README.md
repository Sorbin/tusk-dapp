# Tusk DApp

Tusk DApp is a decentralized application that can be deployed on decentralized platforms like Walrus, as well as traditional hosting services like Vercel. This repository contains the source code and configuration for building and deploying the Tusk DApp.

## Getting Started

### Installation

To install the dependencies, run the following command:

```bash
npm install
```

## Development

To start the development server, use the following command:

```bash
npm run dev
```

## Building the Application

### Build for Walrus

To build the application for deployment on Walrus, use the following command:

```bash
npm run build:walrus
```

This will generate a `dist` folder containing the static assets needed for Walrus deployment.

### Build for Traditional Hosting

To build the application for deployment on traditional platforms (e.g., Vercel, Netlify), use the following command:

```bash
npm run build
```

This will generate a `dist` folder containing the static assets needed for traditional deployment.

## Deployment

### Deploying to Walrus

Walrus is a decentralized platform that allows you to deploy static websites and decentralized applications. 

1. **Build the Application:**
   Run the following command to generate the build for Walrus:

   ```bash
   npm run build:walrus
   ```

2. **Deploy to Walrus:**
   Move the contents of the `dist` folder to the specified `PATH_TO_BUILD_FOLDER` for Walrus deployment. Then, use the `site-builder` command to publish the application:

   ```bash
   ./target/release/site-builder --config site-builder/assets/builder-example.yaml publish {PATH_TO_BUILD_FOLDER}
   ```

   The deployed Tusk DApp will be accessible at a Walrus-generated URL. For an example deployment, visit [https://4b90hd5a1rmgzt5bkgq0bcsi2x9rq3u6gmi8ek6vm240spjogd.walrus.site/](https://4b90hd5a1rmgzt5bkgq0bcsi2x9rq3u6gmi8ek6vm240spjogd.walrus.site/).

   For detailed deployment instructions, refer to the [Walrus documentation](https://docs.walrus.site/walrus-sites/tutorial.html).

You can also deploy to traditional method such as [https://tusk-dapp.vercel.app/](https://tusk-dapp.vercel.app/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.