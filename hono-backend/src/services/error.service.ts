export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
  PAYLOAD_TOO_LARGE = 413,
}

export type ApexError = {
  status: 'error' | 'success'
  statusCode: number
  error: {
    code: string
    message: string
    // details: string,
    timestamp: string
    path: string
    suggestion: string
  }
  // requestId: string,
  // documentation_url: string
}

export type ApexErrorInput = {
  status: 'error' | 'success'
  code: HttpStatus
  message: string
  path: string
  suggestion: string
}

export function createApexError(input: ApexErrorInput): ApexError {
  return {
    status: input.status,
    statusCode: input.code,
    error: {
      code: `${input.code}`,
      message: input.message,
      timestamp: new Date().toISOString(),
      path: input.path,
      suggestion: input.suggestion,
    },
  }
}
