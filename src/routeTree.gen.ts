/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RegistrationImport } from './routes/registration'
import { Route as FactorFiveImport } from './routes/factor-five'
import { Route as CodeOfConductImport } from './routes/code-of-conduct'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const RegistrationRoute = RegistrationImport.update({
  path: '/registration',
  getParentRoute: () => rootRoute,
} as any)

const FactorFiveRoute = FactorFiveImport.update({
  path: '/factor-five',
  getParentRoute: () => rootRoute,
} as any)

const CodeOfConductRoute = CodeOfConductImport.update({
  path: '/code-of-conduct',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/code-of-conduct': {
      id: '/code-of-conduct'
      path: '/code-of-conduct'
      fullPath: '/code-of-conduct'
      preLoaderRoute: typeof CodeOfConductImport
      parentRoute: typeof rootRoute
    }
    '/factor-five': {
      id: '/factor-five'
      path: '/factor-five'
      fullPath: '/factor-five'
      preLoaderRoute: typeof FactorFiveImport
      parentRoute: typeof rootRoute
    }
    '/registration': {
      id: '/registration'
      path: '/registration'
      fullPath: '/registration'
      preLoaderRoute: typeof RegistrationImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/code-of-conduct': typeof CodeOfConductRoute
  '/factor-five': typeof FactorFiveRoute
  '/registration': typeof RegistrationRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/code-of-conduct': typeof CodeOfConductRoute
  '/factor-five': typeof FactorFiveRoute
  '/registration': typeof RegistrationRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/code-of-conduct': typeof CodeOfConductRoute
  '/factor-five': typeof FactorFiveRoute
  '/registration': typeof RegistrationRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/code-of-conduct' | '/factor-five' | '/registration'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/code-of-conduct' | '/factor-five' | '/registration'
  id: '__root__' | '/' | '/code-of-conduct' | '/factor-five' | '/registration'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CodeOfConductRoute: typeof CodeOfConductRoute
  FactorFiveRoute: typeof FactorFiveRoute
  RegistrationRoute: typeof RegistrationRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CodeOfConductRoute: CodeOfConductRoute,
  FactorFiveRoute: FactorFiveRoute,
  RegistrationRoute: RegistrationRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/code-of-conduct",
        "/factor-five",
        "/registration"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/code-of-conduct": {
      "filePath": "code-of-conduct.tsx"
    },
    "/factor-five": {
      "filePath": "factor-five.tsx"
    },
    "/registration": {
      "filePath": "registration.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
