**TASK**

```
Passing data between our Components.

By default properties are only accessible/bindable from within their
components and so that we can bind data from parent component A to child B

We must us the input decator that allows the property to be implicitly accessible
from other components.

@Input() element:{type:string,name:string,content:string}

element property in this case is now accessible to other components.And since its an object
it may be able to receive .

Input is what makes an elements component property bindable from outside of the component(Parent component).

We may therefore as well bind to Components.

custom proprty binding to the component after adding at input is as follows

```

**ALIAS**

```
You may assign a component property with a different name via an alias.

@Input('srvElement')  element:{ type: string, name: string,  content: string};

srvElement now beacomes the name of the element property being binded to

```

**Passing Data from Child to Parent Component**

```
Its very similar to event binding.
as from parent to child was similar to property binding.

@Output() serverCreated =new EventEmitter<{serverName:string, serverContent:string}>();

(i)Output decorator is used in a component thats passing data to another..This is inverse of input.

(ii)That component is emmitting an event thus we must use an event emmiter.

(iii)server created is a custom component props..that will receive the event on the parent component this passing the data.

  <app-cockpit (serverCreated)="onServerAdded($event)"</app-cockpit>


```

**TIP**

```
Assignment is after an equals sign.

colon is declararing the typescript type.
```

**Notes By**

```
Mbugua Caleb

```
