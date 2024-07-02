## Running for dev


1. install docker
   https://docs.docker.com/engine/install/ubuntu/

2. Install bun
  https://bun.sh/docs/installation

3. To install dependencies:
   ```sh
    bun install
   ```

4. Get the container up and running:
   ```sh
    docker compose up
   ```

5. set dev db
   ```
    bun db:migrate
    bun db:seed
   ```


6. Run dev server:
   ```sh
    bun run dev
   ```

7. open http://localhost:3000
