When embedding an app bundled using WebPack into an existing Application i.e. as a Microfrontend.

Sometimes, it may may be required to couple the Frontend and the Host closer than simple pub-sub provides.

For example
  there are multiple instances of the same front required,
  the host needs to communicate directly to a component,
  it's necessary to mount the component at different nodes,
  the host needs to ensure the component is loaded before sending messages
  
This repo offers a simple solution to this.

Essentially, 
 - Bundled is loaded, index.js does not mount the app.
 - Index.js publishes a CustomEvent on window, which includes a factory method.
 - Host Applications, listens for event, execute's factory method, which could inject some pre-initialised information into the component.
 
 In this repo, the factory method returns a class, which allows the host to explicitly mount/unmount the application at a specific page element.
