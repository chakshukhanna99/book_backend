// src/utils/swagger.ts
import swaggerJSDoc from "swagger-jsdoc";

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
        url: "https://bookbackend-production-b990.up.railway.app", // 👈 Your backend base URL
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

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
