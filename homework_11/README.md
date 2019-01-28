# Exercise
1. Create a new Angular application from CLI.
2. From the CLI, create a flat component class `Counter` that has one `propertycounterValue=0`, with inline template and style.
3. The component template should have two buttons and variable bound to the `counterValue` property, when the user clicks on "-" or "+" buttons the `counterValue` should decrease/increase and the user must see the change.
4. Use this component in `AppComponent` and test if everything is workingproperly.

![Counter app](https://user-images.githubusercontent.com/7671024/51866411-8aff1d00-230e-11e9-9e98-7b1a5339f964.png)
# Exercise - Update the Counter Component
1. Create an Input for a property `counter`, so if the parent component sets its value we will change `counterValue`.
2. Create an Output `counterChange`, that emits the current value at all times so the parent component can read the value of `counterValue`.
3. Update your "-" and "+" methods to reflect the change of `counterValue` to `counter`
# Exercise - Update the AppComponent
1. Create a property `ComponentCounterValue` and bind/pass this to yourCounter component Input.
2. Listen to any change of `counterChange` and reflect the change to `ComponentCounterValue`.
3. Bind `ComponentCounterValue` in the Template and verify it works
   
![Counter app](https://user-images.githubusercontent.com/7671024/51866975-01e8e580-2310-11e9-955a-97b453eca42b.png)