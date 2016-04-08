# react-isomophic-server-rending
combine react with redux

### start
use npm & webpack

```sh
npm install
npm run dev
```

### Thinking about Isomorphic Server rendering
	1. server setting(nodejs) and render HTML
	2. client biggest content(client/index) with component(this.prop.children, the component tree that the router gives us)
	3. setting route(routes.jsx)
	4. server route handle -> createLocation
	5. remainder things like setting component route in client -> createBrowserLocation

### Thinking about react with redux
    1. thinking about action
    2. deal with reducer
    3. write middleware if have
    4. combine to store
    5. main use Provider pass store to component/xxx.js to deal with react component
    6. use connect to connect the store and action to react's props
    7. write your component's view and listen event


default dev port: 8080
