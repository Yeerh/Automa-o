
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Portaria
 * 
 */
export type Portaria = $Result.DefaultSelection<Prisma.$PortariaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Portarias
 * const portarias = await prisma.portaria.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Portarias
   * const portarias = await prisma.portaria.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.portaria`: Exposes CRUD operations for the **Portaria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portarias
    * const portarias = await prisma.portaria.findMany()
    * ```
    */
  get portaria(): Prisma.PortariaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Portaria: 'Portaria'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "portaria"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Portaria: {
        payload: Prisma.$PortariaPayload<ExtArgs>
        fields: Prisma.PortariaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortariaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortariaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortariaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortariaPayload>
          }
          findFirst: {
            args: Prisma.PortariaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortariaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortariaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortariaPayload>
          }
          findMany: {
            args: Prisma.PortariaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortariaPayload>[]
          }
          create: {
            args: Prisma.PortariaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortariaPayload>
          }
          createMany: {
            args: Prisma.PortariaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortariaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortariaPayload>[]
          }
          delete: {
            args: Prisma.PortariaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortariaPayload>
          }
          update: {
            args: Prisma.PortariaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortariaPayload>
          }
          deleteMany: {
            args: Prisma.PortariaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortariaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortariaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortariaPayload>[]
          }
          upsert: {
            args: Prisma.PortariaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortariaPayload>
          }
          aggregate: {
            args: Prisma.PortariaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortaria>
          }
          groupBy: {
            args: Prisma.PortariaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortariaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortariaCountArgs<ExtArgs>
            result: $Utils.Optional<PortariaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    portaria?: PortariaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Portaria
   */

  export type AggregatePortaria = {
    _count: PortariaCountAggregateOutputType | null
    _avg: PortariaAvgAggregateOutputType | null
    _sum: PortariaSumAggregateOutputType | null
    _min: PortariaMinAggregateOutputType | null
    _max: PortariaMaxAggregateOutputType | null
  }

  export type PortariaAvgAggregateOutputType = {
    id: number | null
  }

  export type PortariaSumAggregateOutputType = {
    id: number | null
  }

  export type PortariaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    portaria: string | null
    cpf: string | null
    cargo: string | null
    simbolo: string | null
    secretaria: string | null
    data: Date | null
  }

  export type PortariaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    portaria: string | null
    cpf: string | null
    cargo: string | null
    simbolo: string | null
    secretaria: string | null
    data: Date | null
  }

  export type PortariaCountAggregateOutputType = {
    id: number
    nome: number
    portaria: number
    cpf: number
    cargo: number
    simbolo: number
    secretaria: number
    data: number
    _all: number
  }


  export type PortariaAvgAggregateInputType = {
    id?: true
  }

  export type PortariaSumAggregateInputType = {
    id?: true
  }

  export type PortariaMinAggregateInputType = {
    id?: true
    nome?: true
    portaria?: true
    cpf?: true
    cargo?: true
    simbolo?: true
    secretaria?: true
    data?: true
  }

  export type PortariaMaxAggregateInputType = {
    id?: true
    nome?: true
    portaria?: true
    cpf?: true
    cargo?: true
    simbolo?: true
    secretaria?: true
    data?: true
  }

  export type PortariaCountAggregateInputType = {
    id?: true
    nome?: true
    portaria?: true
    cpf?: true
    cargo?: true
    simbolo?: true
    secretaria?: true
    data?: true
    _all?: true
  }

  export type PortariaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portaria to aggregate.
     */
    where?: PortariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portarias to fetch.
     */
    orderBy?: PortariaOrderByWithRelationInput | PortariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Portarias
    **/
    _count?: true | PortariaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortariaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortariaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortariaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortariaMaxAggregateInputType
  }

  export type GetPortariaAggregateType<T extends PortariaAggregateArgs> = {
        [P in keyof T & keyof AggregatePortaria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortaria[P]>
      : GetScalarType<T[P], AggregatePortaria[P]>
  }




  export type PortariaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortariaWhereInput
    orderBy?: PortariaOrderByWithAggregationInput | PortariaOrderByWithAggregationInput[]
    by: PortariaScalarFieldEnum[] | PortariaScalarFieldEnum
    having?: PortariaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortariaCountAggregateInputType | true
    _avg?: PortariaAvgAggregateInputType
    _sum?: PortariaSumAggregateInputType
    _min?: PortariaMinAggregateInputType
    _max?: PortariaMaxAggregateInputType
  }

  export type PortariaGroupByOutputType = {
    id: number
    nome: string
    portaria: string
    cpf: string
    cargo: string
    simbolo: string
    secretaria: string
    data: Date
    _count: PortariaCountAggregateOutputType | null
    _avg: PortariaAvgAggregateOutputType | null
    _sum: PortariaSumAggregateOutputType | null
    _min: PortariaMinAggregateOutputType | null
    _max: PortariaMaxAggregateOutputType | null
  }

  type GetPortariaGroupByPayload<T extends PortariaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortariaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortariaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortariaGroupByOutputType[P]>
            : GetScalarType<T[P], PortariaGroupByOutputType[P]>
        }
      >
    >


  export type PortariaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    portaria?: boolean
    cpf?: boolean
    cargo?: boolean
    simbolo?: boolean
    secretaria?: boolean
    data?: boolean
  }, ExtArgs["result"]["portaria"]>

  export type PortariaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    portaria?: boolean
    cpf?: boolean
    cargo?: boolean
    simbolo?: boolean
    secretaria?: boolean
    data?: boolean
  }, ExtArgs["result"]["portaria"]>

  export type PortariaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    portaria?: boolean
    cpf?: boolean
    cargo?: boolean
    simbolo?: boolean
    secretaria?: boolean
    data?: boolean
  }, ExtArgs["result"]["portaria"]>

  export type PortariaSelectScalar = {
    id?: boolean
    nome?: boolean
    portaria?: boolean
    cpf?: boolean
    cargo?: boolean
    simbolo?: boolean
    secretaria?: boolean
    data?: boolean
  }

  export type PortariaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "portaria" | "cpf" | "cargo" | "simbolo" | "secretaria" | "data", ExtArgs["result"]["portaria"]>

  export type $PortariaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Portaria"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      portaria: string
      cpf: string
      cargo: string
      simbolo: string
      secretaria: string
      data: Date
    }, ExtArgs["result"]["portaria"]>
    composites: {}
  }

  type PortariaGetPayload<S extends boolean | null | undefined | PortariaDefaultArgs> = $Result.GetResult<Prisma.$PortariaPayload, S>

  type PortariaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortariaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortariaCountAggregateInputType | true
    }

  export interface PortariaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Portaria'], meta: { name: 'Portaria' } }
    /**
     * Find zero or one Portaria that matches the filter.
     * @param {PortariaFindUniqueArgs} args - Arguments to find a Portaria
     * @example
     * // Get one Portaria
     * const portaria = await prisma.portaria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortariaFindUniqueArgs>(args: SelectSubset<T, PortariaFindUniqueArgs<ExtArgs>>): Prisma__PortariaClient<$Result.GetResult<Prisma.$PortariaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Portaria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortariaFindUniqueOrThrowArgs} args - Arguments to find a Portaria
     * @example
     * // Get one Portaria
     * const portaria = await prisma.portaria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortariaFindUniqueOrThrowArgs>(args: SelectSubset<T, PortariaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortariaClient<$Result.GetResult<Prisma.$PortariaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portaria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortariaFindFirstArgs} args - Arguments to find a Portaria
     * @example
     * // Get one Portaria
     * const portaria = await prisma.portaria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortariaFindFirstArgs>(args?: SelectSubset<T, PortariaFindFirstArgs<ExtArgs>>): Prisma__PortariaClient<$Result.GetResult<Prisma.$PortariaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portaria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortariaFindFirstOrThrowArgs} args - Arguments to find a Portaria
     * @example
     * // Get one Portaria
     * const portaria = await prisma.portaria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortariaFindFirstOrThrowArgs>(args?: SelectSubset<T, PortariaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortariaClient<$Result.GetResult<Prisma.$PortariaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Portarias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortariaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portarias
     * const portarias = await prisma.portaria.findMany()
     * 
     * // Get first 10 Portarias
     * const portarias = await prisma.portaria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portariaWithIdOnly = await prisma.portaria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortariaFindManyArgs>(args?: SelectSubset<T, PortariaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortariaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Portaria.
     * @param {PortariaCreateArgs} args - Arguments to create a Portaria.
     * @example
     * // Create one Portaria
     * const Portaria = await prisma.portaria.create({
     *   data: {
     *     // ... data to create a Portaria
     *   }
     * })
     * 
     */
    create<T extends PortariaCreateArgs>(args: SelectSubset<T, PortariaCreateArgs<ExtArgs>>): Prisma__PortariaClient<$Result.GetResult<Prisma.$PortariaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Portarias.
     * @param {PortariaCreateManyArgs} args - Arguments to create many Portarias.
     * @example
     * // Create many Portarias
     * const portaria = await prisma.portaria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortariaCreateManyArgs>(args?: SelectSubset<T, PortariaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Portarias and returns the data saved in the database.
     * @param {PortariaCreateManyAndReturnArgs} args - Arguments to create many Portarias.
     * @example
     * // Create many Portarias
     * const portaria = await prisma.portaria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Portarias and only return the `id`
     * const portariaWithIdOnly = await prisma.portaria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortariaCreateManyAndReturnArgs>(args?: SelectSubset<T, PortariaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortariaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Portaria.
     * @param {PortariaDeleteArgs} args - Arguments to delete one Portaria.
     * @example
     * // Delete one Portaria
     * const Portaria = await prisma.portaria.delete({
     *   where: {
     *     // ... filter to delete one Portaria
     *   }
     * })
     * 
     */
    delete<T extends PortariaDeleteArgs>(args: SelectSubset<T, PortariaDeleteArgs<ExtArgs>>): Prisma__PortariaClient<$Result.GetResult<Prisma.$PortariaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Portaria.
     * @param {PortariaUpdateArgs} args - Arguments to update one Portaria.
     * @example
     * // Update one Portaria
     * const portaria = await prisma.portaria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortariaUpdateArgs>(args: SelectSubset<T, PortariaUpdateArgs<ExtArgs>>): Prisma__PortariaClient<$Result.GetResult<Prisma.$PortariaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Portarias.
     * @param {PortariaDeleteManyArgs} args - Arguments to filter Portarias to delete.
     * @example
     * // Delete a few Portarias
     * const { count } = await prisma.portaria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortariaDeleteManyArgs>(args?: SelectSubset<T, PortariaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortariaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portarias
     * const portaria = await prisma.portaria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortariaUpdateManyArgs>(args: SelectSubset<T, PortariaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portarias and returns the data updated in the database.
     * @param {PortariaUpdateManyAndReturnArgs} args - Arguments to update many Portarias.
     * @example
     * // Update many Portarias
     * const portaria = await prisma.portaria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Portarias and only return the `id`
     * const portariaWithIdOnly = await prisma.portaria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortariaUpdateManyAndReturnArgs>(args: SelectSubset<T, PortariaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortariaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Portaria.
     * @param {PortariaUpsertArgs} args - Arguments to update or create a Portaria.
     * @example
     * // Update or create a Portaria
     * const portaria = await prisma.portaria.upsert({
     *   create: {
     *     // ... data to create a Portaria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portaria we want to update
     *   }
     * })
     */
    upsert<T extends PortariaUpsertArgs>(args: SelectSubset<T, PortariaUpsertArgs<ExtArgs>>): Prisma__PortariaClient<$Result.GetResult<Prisma.$PortariaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Portarias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortariaCountArgs} args - Arguments to filter Portarias to count.
     * @example
     * // Count the number of Portarias
     * const count = await prisma.portaria.count({
     *   where: {
     *     // ... the filter for the Portarias we want to count
     *   }
     * })
    **/
    count<T extends PortariaCountArgs>(
      args?: Subset<T, PortariaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortariaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortariaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortariaAggregateArgs>(args: Subset<T, PortariaAggregateArgs>): Prisma.PrismaPromise<GetPortariaAggregateType<T>>

    /**
     * Group by Portaria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortariaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortariaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortariaGroupByArgs['orderBy'] }
        : { orderBy?: PortariaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortariaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortariaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Portaria model
   */
  readonly fields: PortariaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Portaria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortariaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Portaria model
   */
  interface PortariaFieldRefs {
    readonly id: FieldRef<"Portaria", 'Int'>
    readonly nome: FieldRef<"Portaria", 'String'>
    readonly portaria: FieldRef<"Portaria", 'String'>
    readonly cpf: FieldRef<"Portaria", 'String'>
    readonly cargo: FieldRef<"Portaria", 'String'>
    readonly simbolo: FieldRef<"Portaria", 'String'>
    readonly secretaria: FieldRef<"Portaria", 'String'>
    readonly data: FieldRef<"Portaria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Portaria findUnique
   */
  export type PortariaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portaria
     */
    select?: PortariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portaria
     */
    omit?: PortariaOmit<ExtArgs> | null
    /**
     * Filter, which Portaria to fetch.
     */
    where: PortariaWhereUniqueInput
  }

  /**
   * Portaria findUniqueOrThrow
   */
  export type PortariaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portaria
     */
    select?: PortariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portaria
     */
    omit?: PortariaOmit<ExtArgs> | null
    /**
     * Filter, which Portaria to fetch.
     */
    where: PortariaWhereUniqueInput
  }

  /**
   * Portaria findFirst
   */
  export type PortariaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portaria
     */
    select?: PortariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portaria
     */
    omit?: PortariaOmit<ExtArgs> | null
    /**
     * Filter, which Portaria to fetch.
     */
    where?: PortariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portarias to fetch.
     */
    orderBy?: PortariaOrderByWithRelationInput | PortariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portarias.
     */
    cursor?: PortariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portarias.
     */
    distinct?: PortariaScalarFieldEnum | PortariaScalarFieldEnum[]
  }

  /**
   * Portaria findFirstOrThrow
   */
  export type PortariaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portaria
     */
    select?: PortariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portaria
     */
    omit?: PortariaOmit<ExtArgs> | null
    /**
     * Filter, which Portaria to fetch.
     */
    where?: PortariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portarias to fetch.
     */
    orderBy?: PortariaOrderByWithRelationInput | PortariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portarias.
     */
    cursor?: PortariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portarias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portarias.
     */
    distinct?: PortariaScalarFieldEnum | PortariaScalarFieldEnum[]
  }

  /**
   * Portaria findMany
   */
  export type PortariaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portaria
     */
    select?: PortariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portaria
     */
    omit?: PortariaOmit<ExtArgs> | null
    /**
     * Filter, which Portarias to fetch.
     */
    where?: PortariaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portarias to fetch.
     */
    orderBy?: PortariaOrderByWithRelationInput | PortariaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Portarias.
     */
    cursor?: PortariaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portarias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portarias.
     */
    skip?: number
    distinct?: PortariaScalarFieldEnum | PortariaScalarFieldEnum[]
  }

  /**
   * Portaria create
   */
  export type PortariaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portaria
     */
    select?: PortariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portaria
     */
    omit?: PortariaOmit<ExtArgs> | null
    /**
     * The data needed to create a Portaria.
     */
    data: XOR<PortariaCreateInput, PortariaUncheckedCreateInput>
  }

  /**
   * Portaria createMany
   */
  export type PortariaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Portarias.
     */
    data: PortariaCreateManyInput | PortariaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Portaria createManyAndReturn
   */
  export type PortariaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portaria
     */
    select?: PortariaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portaria
     */
    omit?: PortariaOmit<ExtArgs> | null
    /**
     * The data used to create many Portarias.
     */
    data: PortariaCreateManyInput | PortariaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Portaria update
   */
  export type PortariaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portaria
     */
    select?: PortariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portaria
     */
    omit?: PortariaOmit<ExtArgs> | null
    /**
     * The data needed to update a Portaria.
     */
    data: XOR<PortariaUpdateInput, PortariaUncheckedUpdateInput>
    /**
     * Choose, which Portaria to update.
     */
    where: PortariaWhereUniqueInput
  }

  /**
   * Portaria updateMany
   */
  export type PortariaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Portarias.
     */
    data: XOR<PortariaUpdateManyMutationInput, PortariaUncheckedUpdateManyInput>
    /**
     * Filter which Portarias to update
     */
    where?: PortariaWhereInput
    /**
     * Limit how many Portarias to update.
     */
    limit?: number
  }

  /**
   * Portaria updateManyAndReturn
   */
  export type PortariaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portaria
     */
    select?: PortariaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portaria
     */
    omit?: PortariaOmit<ExtArgs> | null
    /**
     * The data used to update Portarias.
     */
    data: XOR<PortariaUpdateManyMutationInput, PortariaUncheckedUpdateManyInput>
    /**
     * Filter which Portarias to update
     */
    where?: PortariaWhereInput
    /**
     * Limit how many Portarias to update.
     */
    limit?: number
  }

  /**
   * Portaria upsert
   */
  export type PortariaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portaria
     */
    select?: PortariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portaria
     */
    omit?: PortariaOmit<ExtArgs> | null
    /**
     * The filter to search for the Portaria to update in case it exists.
     */
    where: PortariaWhereUniqueInput
    /**
     * In case the Portaria found by the `where` argument doesn't exist, create a new Portaria with this data.
     */
    create: XOR<PortariaCreateInput, PortariaUncheckedCreateInput>
    /**
     * In case the Portaria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortariaUpdateInput, PortariaUncheckedUpdateInput>
  }

  /**
   * Portaria delete
   */
  export type PortariaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portaria
     */
    select?: PortariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portaria
     */
    omit?: PortariaOmit<ExtArgs> | null
    /**
     * Filter which Portaria to delete.
     */
    where: PortariaWhereUniqueInput
  }

  /**
   * Portaria deleteMany
   */
  export type PortariaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portarias to delete
     */
    where?: PortariaWhereInput
    /**
     * Limit how many Portarias to delete.
     */
    limit?: number
  }

  /**
   * Portaria without action
   */
  export type PortariaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portaria
     */
    select?: PortariaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portaria
     */
    omit?: PortariaOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PortariaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    portaria: 'portaria',
    cpf: 'cpf',
    cargo: 'cargo',
    simbolo: 'simbolo',
    secretaria: 'secretaria',
    data: 'data'
  };

  export type PortariaScalarFieldEnum = (typeof PortariaScalarFieldEnum)[keyof typeof PortariaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PortariaWhereInput = {
    AND?: PortariaWhereInput | PortariaWhereInput[]
    OR?: PortariaWhereInput[]
    NOT?: PortariaWhereInput | PortariaWhereInput[]
    id?: IntFilter<"Portaria"> | number
    nome?: StringFilter<"Portaria"> | string
    portaria?: StringFilter<"Portaria"> | string
    cpf?: StringFilter<"Portaria"> | string
    cargo?: StringFilter<"Portaria"> | string
    simbolo?: StringFilter<"Portaria"> | string
    secretaria?: StringFilter<"Portaria"> | string
    data?: DateTimeFilter<"Portaria"> | Date | string
  }

  export type PortariaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    portaria?: SortOrder
    cpf?: SortOrder
    cargo?: SortOrder
    simbolo?: SortOrder
    secretaria?: SortOrder
    data?: SortOrder
  }

  export type PortariaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PortariaWhereInput | PortariaWhereInput[]
    OR?: PortariaWhereInput[]
    NOT?: PortariaWhereInput | PortariaWhereInput[]
    nome?: StringFilter<"Portaria"> | string
    portaria?: StringFilter<"Portaria"> | string
    cpf?: StringFilter<"Portaria"> | string
    cargo?: StringFilter<"Portaria"> | string
    simbolo?: StringFilter<"Portaria"> | string
    secretaria?: StringFilter<"Portaria"> | string
    data?: DateTimeFilter<"Portaria"> | Date | string
  }, "id">

  export type PortariaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    portaria?: SortOrder
    cpf?: SortOrder
    cargo?: SortOrder
    simbolo?: SortOrder
    secretaria?: SortOrder
    data?: SortOrder
    _count?: PortariaCountOrderByAggregateInput
    _avg?: PortariaAvgOrderByAggregateInput
    _max?: PortariaMaxOrderByAggregateInput
    _min?: PortariaMinOrderByAggregateInput
    _sum?: PortariaSumOrderByAggregateInput
  }

  export type PortariaScalarWhereWithAggregatesInput = {
    AND?: PortariaScalarWhereWithAggregatesInput | PortariaScalarWhereWithAggregatesInput[]
    OR?: PortariaScalarWhereWithAggregatesInput[]
    NOT?: PortariaScalarWhereWithAggregatesInput | PortariaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Portaria"> | number
    nome?: StringWithAggregatesFilter<"Portaria"> | string
    portaria?: StringWithAggregatesFilter<"Portaria"> | string
    cpf?: StringWithAggregatesFilter<"Portaria"> | string
    cargo?: StringWithAggregatesFilter<"Portaria"> | string
    simbolo?: StringWithAggregatesFilter<"Portaria"> | string
    secretaria?: StringWithAggregatesFilter<"Portaria"> | string
    data?: DateTimeWithAggregatesFilter<"Portaria"> | Date | string
  }

  export type PortariaCreateInput = {
    nome: string
    portaria: string
    cpf: string
    cargo: string
    simbolo: string
    secretaria: string
    data: Date | string
  }

  export type PortariaUncheckedCreateInput = {
    id?: number
    nome: string
    portaria: string
    cpf: string
    cargo: string
    simbolo: string
    secretaria: string
    data: Date | string
  }

  export type PortariaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    portaria?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    simbolo?: StringFieldUpdateOperationsInput | string
    secretaria?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortariaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    portaria?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    simbolo?: StringFieldUpdateOperationsInput | string
    secretaria?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortariaCreateManyInput = {
    id?: number
    nome: string
    portaria: string
    cpf: string
    cargo: string
    simbolo: string
    secretaria: string
    data: Date | string
  }

  export type PortariaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    portaria?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    simbolo?: StringFieldUpdateOperationsInput | string
    secretaria?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortariaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    portaria?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    simbolo?: StringFieldUpdateOperationsInput | string
    secretaria?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PortariaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    portaria?: SortOrder
    cpf?: SortOrder
    cargo?: SortOrder
    simbolo?: SortOrder
    secretaria?: SortOrder
    data?: SortOrder
  }

  export type PortariaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PortariaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    portaria?: SortOrder
    cpf?: SortOrder
    cargo?: SortOrder
    simbolo?: SortOrder
    secretaria?: SortOrder
    data?: SortOrder
  }

  export type PortariaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    portaria?: SortOrder
    cpf?: SortOrder
    cargo?: SortOrder
    simbolo?: SortOrder
    secretaria?: SortOrder
    data?: SortOrder
  }

  export type PortariaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}