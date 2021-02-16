export const GenerateResponse = (message, response, success = {}) => {
    return {
      response,
      message: message,
      success: success,
    };
  };

  export const GenerateErrorCode = (err) => {
    if (err.message){
        return parseInt(err.message.split(":").slice(-1)[0])
    }
    return 500;
  };