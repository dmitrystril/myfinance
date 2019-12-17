import express from 'express';

abstract class BaseController {
  protected request: express.Request;
  protected response: express.Response;

  protected abstract executeImpl(request: express.Request, response: express.Response);

  public async execute(request: express.Request, response: express.Response): Promise<void | any> {
    this.request = request;
    this.response = response;

    try {
      await this.executeImpl(request, response);
    } catch (error) {
      console.log(`[BaseController]: Error caught by controller`);
      console.log(error);
    }
  }

  protected jsonResponse(code: number, message: string) {
    return this.response.status(code).json(message);
  }

  protected ok<T>(dto?: T) {
    if (!!dto) {
      return this.response.status(200).json(dto);
    } else {
      return this.response.sendStatus(200);
    }
  }

  protected created() {
    return this.response.sendStatus(201);
  }

  protected clientError (message?: string) {
    return this.jsonResponse(400, message ? message : 'Bad request');
  }

  protected unauthorized(message?: string) {
    return this.jsonResponse(401, message ? message : 'Unauthorized');
  }

  protected forbidden(message?: string) {
    return this.jsonResponse(403, message ? message : 'Forbidden');
  }

  protected notFound(message?: string) {
    return this.jsonResponse(404, message ? message : 'Not found');
  }

  protected internalServerError(error: Error | string) {
    return this.response.status(500).json({
      message: error.toString()
    })
  }
}

export default BaseController;
