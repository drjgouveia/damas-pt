import asyncio
import websockets

codes_games = []
gameStatus = {}

async def dealer(websocket, path):
    name = await websocket.recv()
    print(f"< {name}")

    greeting = "Received!"

    await websocket.send(greeting)
    print(f"> {greeting}")


try:
    start_server = websockets.serve(dealer, "127.0.0.1", 8765)

    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()
except:
    exit(0)
