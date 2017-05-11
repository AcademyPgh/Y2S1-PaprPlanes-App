export function getUserId() {
    if (!global.userId)
      global.userId ='';
    return global.userId;
  }

export function setUserId(userId) {
    global.userId = userId;
  }
