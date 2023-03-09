
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.PrismaOakScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  PrismaOak: 'PrismaOak'
});

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\ADMIN\\Desktop\\Projects\\Prisma-Oak with Deno\\server\\src\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\.env"
  },
  "relativePath": "..\\..\\..\\prisma",
  "clientVersion": "4.9.0",
  "engineVersion": "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQpnZW5lcmF0b3IgY2xpZW50IHsKICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgogIHByZXZpZXdGZWF0dXJlcyA9IFsiZGVubyJdCiAgb3V0cHV0ID0gIi4uL3NyYy9nZW5lcmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBQcmlzbWFPYWsgewogIGlkIEludCAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lIFN0cmluZyBAdW5pcXVlCiAgZGVzY3JpcHRpb24gIFN0cmluZwp9'
config.inlineSchemaHash = '8c7c9143ac528be41964e201170facc558dd57d3836c64ac52908e228d5a0917'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

