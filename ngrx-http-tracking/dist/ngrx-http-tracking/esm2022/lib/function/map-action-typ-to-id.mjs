export const mapActionTypeToId = (actionType) => actionType
    .toLowerCase()
    .replace(/success/g, '')
    .replace(/failure/g, '')
    .trim()
    .replace(/ /g, '-');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWFjdGlvbi10eXAtdG8taWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3J4LWh0dHAtdHJhY2tpbmcvc3JjL2xpYi9mdW5jdGlvbi9tYXAtYWN0aW9uLXR5cC10by1pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLFVBQWtCLEVBQUUsRUFBRSxDQUN0RCxVQUFVO0tBQ1AsV0FBVyxFQUFFO0tBQ2IsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7S0FDdkIsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7S0FDdkIsSUFBSSxFQUFFO0tBQ04sT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBtYXBBY3Rpb25UeXBlVG9JZCA9IChhY3Rpb25UeXBlOiBzdHJpbmcpID0+XHJcbiAgYWN0aW9uVHlwZVxyXG4gICAgLnRvTG93ZXJDYXNlKClcclxuICAgIC5yZXBsYWNlKC9zdWNjZXNzL2csICcnKVxyXG4gICAgLnJlcGxhY2UoL2ZhaWx1cmUvZywgJycpXHJcbiAgICAudHJpbSgpXHJcbiAgICAucmVwbGFjZSgvIC9nLCAnLScpO1xyXG4iXX0=