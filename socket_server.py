import asyncio
import websockets

codes_games = []
gameStatus = {}

async def dealer(websocket, path):
    print(path)
    if len(path) == 1:
        new_code = await websocket.recv()
        codes_games.append(new_code)
        gameStatus[new_code] = {}

    else:
        name = await websocket.recv()

        """REQUEST MUST BE LIKE 'receive_|code|_|data|'"""
        if "receive_" in name:
            print(f"< {name}")

            greeting = "Received!"

            await websocket.send(greeting)
            print(f"> {greeting}")

        elif "send" in name:


try:
    start_server = websockets.serve(dealer, "127.0.0.1", 8765)

    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()
except:
    exit(0)
