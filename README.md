# NgRx Http Tracking

[Checkout the demo](https://acandylevey.github.io/ngrx-http-tracking/)

This NgRx library is aims to slot into your pre-existing NgRx stores to reduce the amount of boiler plate code you need to write and to make handling the loading, success and error states of HTTP Requests significantly easier.

Importing the module


````
...
import { NgrxHttpTrackingModule } from '@acandylevey/ngrx-http-tracking';

 imports: [
    ...
    NgrxHttpTrackingModule,
 ]

````

Creating a http-tracked action

````
export const fetchUsers = createTrackingActions<UserRequest, User[]>(
  'Users',
  'fetchUsers'
);
````

Creating your effect

````
import { UserApiService } from './user-api.service';
import * as UserActions from './user.actions';
...
fetchUsers$ = createTrackingEffect(
    this.actions$,
    UserActions.fetchUsers,
    this.userApi.fetchUsers,
    'Could not load users'
  );
````

Your reducer doesn't change much, except you no longer need to worry about keeping track of the load state

````
const usersReducer = createReducer(
  initialState,
  on(UserActions.fetchUsers.loaded, (state, { payload }) =>
    userssAdapter.setAll(payload, { ...state })
  )
);
````

Tracking the results

By default, all actions are tagged with a global tag that can then be easily intercepted a global level, to provide global error handling or a global loading spinner if any actions are waiting on http requests. 


````
 isLoaded$ = this.httpTracker.isLoaded(UserActions.fetchUsers);
 isLoading$ = this.httpTracker.isLoading(UserActions.fetchUsers);

 isGloballyLoading$ = this.httpTrackingFacade.getGlobalLoading();
 globalErrors$ = this.httpTrackingFacade.getGlobalErrors();
````

You can also apply your own tags to a set of actions and then get summarised results back

````
export const fetchUsers = createTrackingActions<UserRequest, User[]>(
  'Users',
  'fetchUsers',
  true, // has global tag still
  ['user-profiles']
);

isTagLoading$ = this.httpTracker.isTagLoading('user-profiles');
````

There is also a provided way of simple continuing a peice of logic once a http request as resolved (Either success or failure)

Firing the reuqest from a facade

````
 fetchUsers() {
    this.store.dispatch(UserActions.fetchUsers.loading());
    return UserActions.fetchUsers;
  }
````

Tracking it
````
this.httpTrackingFacade
      .getResolved(this.userFacade.fetchUsers())
      .subscribe((result) => {
        console.log(`The result from the fetch users call was: {result}`);
      });
````