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

We may as well implement and alias for our own custom events as follows:

@Output('bpCreated')blueprintCreated =new EventEmitter<{serverName:string, serverContent:string}>();

The events name from the outside(or in other components) will therefore be bpCreated amd not blueprintCreated.


```

**TIP**

```
Assignment is after an equals sign.

colon is declararing the typescript type.
```

**SUMMARY OF COMPONENT COMMUNICATION**

```
@input()->when the a child compnent is receiving data from a parent/When we want to bind to it.

When its receiving a prop..It receives it as an attrinute.

(b)@Output() used when a child is emmitting data to a parent..Its implemented as how we deal with events in Angular JS.
Parent events are able to listen to events emitted by the emmitor.

N/B

THERE are cases where the distance for communiation is too large..

In this use case its where we choose to use Services..[More like redux]
```

**View Encapsulation**

```
By default styles in Angular JS only take effect from within the component..

It by default always assingns a unique id for each compnent under the hood as below

<app-server element _ngcontent-qkv-c40 >

_ngcontent-qkv-c40 is assigned to all the elements and divs in the appserver.

_ngcontent-qkv-c41-Is assinged to the adjacent component and all of its divs.

Its uses a behavoiur called shadow DOM(Separation of concerns)

Angular eneforces what we call style encapsulation...

N/B

We may change angulars view  encapsulation default behaviour by

encapsulation:ViewEncapsulation.Emulated //Emulated its the default .Other Options are None and Native(Native imitates the shadow DOM)


```

**GETTING DATA FROM MY TEMPLATES TO MY TYPESCRIPT**

**Method One**
**Local References**

```
May be used as an atlernative to [(ngModel)].

May be used by any HTML component in your template but not in your typescript code.

It important to note that it gives us the element itself with all its properties and not just
the value(gives us all the propties of an element in the DOM)

Defining One
<input
type="text"
class="form-control"
#serverNameInput>

Event then takes in the local reference as an argument and the value may be extracted.

 <button
    class="btn btn-primary"
    (click)="onAddServer(serverNameInput)">Add Server</button>
    <button

N/B The local reference is the above case is passed through the method and assecces as a HTMLElementType.

```

**Method Two**

**Local references passed through viewChild**

```

What if you not want to get the value only when you trigger an event??

This is where view child comes in.

Local references may also be accessed in your typescript through viewChild.

It returns an element reference from which we can be able to access a value.

@ViewChild('serverContentInput') serverContentInput:ElementRef;

Should i wish to pass HTML Content into my component is should use <ng-content></ng-content>.


```

**Method Three**

**Ng Content**

```
What if you want to inject some dynamic html into your component..We use ngcontent.

<ng-content></ng-content>

We do not pass that data as a prop

```

**LifeCycle Methods**

```
When a component is instanciated ,Angular goes through a couple of phases in the creation of
the component.

Here is a list of lifecycle methods:

(a)  ngOnChanges(changes:SimpleChanges){
}

 It is called first...refers to changes in the props passed into the component.
 It is the Only one that takes an argument.

(b) ngOnInit(){}

(c) ngDoCheck(){}

(d)  ngAfterContentInit(){}

(e) ngAfterContentChecked(){}

(f)ngAfterViewInit(){}

(g) ngAfterViewChecked(){}

(h) ngOnDestroy(){}

```

**Method 4**
```

@ContentChild('paragraph') paragraph:ElementRef;

Helps me access the value of a local reference from the parant to child co

```
**Notes By**
```
Mbugua Caleb

```
