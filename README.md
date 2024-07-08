# Pattern - Efficient queries (RTK)

## Overview

Web applications normally need to fetch data from a server in order to display it. They also usually need to make updates to that data, send those updates to the server, and keep the cached data on the client in sync with the data on the server.
Over the last couple years, the React community has come to realize that "data fetching and caching" is really a different set of concerns than "state management". While you can use a state management library like Redux to cache data, the use cases are different enough that it's worth using tools that are purpose-built for the data fetching use case.

RTK Query takes inspiration from other tools that have pioneered solutions for data fetching, like Apollo Client, React Query, Urql, and SWR, but adds a unique approach to its API design.

## Changes

Since the application uses a custom hook to trigger the fetch and access the queried data, the components do not need to change at all. The only changes are in the supporting infrastructure and the custom hook.

- add a new slice using `createApi`
  - customize the slice using endpoints
  - customize the query using query tags
  - specify the endpoints
- attach the apiSlice to the store
- update the custom hook to use typed query from the slice

## Pros

- Incorporates most features from other competitors
- Integrated with rtk
- Rich debugging tools

## Cons

- Documentation is poor compared to competing tools
- Typescript errors are difficult to decipher
- Not used by many developers so StackOverflow & Discord are not helpful
- Customization is generally not possible

## Devtool support

rtk-query has rich support for debugging queries and state. This includes tabs specific to rtk-query - including cache status and API fulfillment.

## Axios

Supporting axios with rtk-query is non-trivial. This repo includes all of the necessary plumbing for an axios integration.
This includes both request / response interceptors and a complicated customization to the rtk-query `baseQuery` property.

The request interceptor includes debug logging to demonstrate the successful integration.

## Refs

rtk-query overview
https://redux-toolkit.js.org/rtk-query/overview

Auth example (without axios)
https://redux-toolkit.js.org/rtk-query/usage/examples#authentication

Comparison to react-query
https://github.com/travis-hilterbrand/pattern-query
