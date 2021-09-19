package com.mithilesh.sahoo.employeeApp.errorHandler;

public class ErrorHandlerMessage extends Exception{

    public ErrorHandlerMessage() {
        super();
    }

    public ErrorHandlerMessage(String message) {
        super(message);
    }

    public ErrorHandlerMessage(String message, Throwable cause) {
        super(message, cause);
    }

    public ErrorHandlerMessage(Throwable cause) {
        super(cause);
    }

    protected ErrorHandlerMessage(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
