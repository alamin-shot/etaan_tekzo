import "server-only";
import { createClient } from "./client-factory";
import { env } from "@/config/env";

export const server = createClient(env.backendApiUrl || "http://localhost");