{
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type SuccessState = {
    result: "success";
  };

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      throw new Error("no network");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      // 어정쩡하게 try-catch를 사용하면 안된다.
      this.client.tryConnect();
      // login...
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      // 의미있는 곳에서 try-catch를 사용해야 한다.
      try {
        this.userService.login();
      } catch (error) {
        console.log(`catched: ${error}`);
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
