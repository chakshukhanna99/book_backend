"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
// src/utils/swagger.ts
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chakshu Khanna",
      version: "1.0.0",
      description: "API documentation for the Ck Books's project",
    },
    servers: [
      {
        url:
          process.env.SWAGGER_BASE_URL ||
          "https://bookbackend-production-b990.up.railway.app", // 👈 Your backend base URL
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["src/**/*.ts"], // Make sure this includes your route files
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
