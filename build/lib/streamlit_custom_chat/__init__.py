import streamlit.components.v1 as components
import os
from pathlib import Path
# Create a function _component_func which will call the frontend component when run
# _component_func = components.declare_component(
#     "ChatContainer",
#     url="http://localhost:3000",  # Fetch frontend component from local webserver
# )

_USE_WEB_DEV_SERVER = os.getenv("USE_WEB_DEV_SERVER", False)
_WEB_DEV_SERVER_URL = os.getenv("WEB_DEV_SERVER_URL", "http://localhost:3000")
COMPONENT_NAME = "ChatContainer"

if _USE_WEB_DEV_SERVER:
    component = components.declare_component(name=COMPONENT_NAME, url=_WEB_DEV_SERVER_URL)
else:
    build_dir = str(Path(__file__).parent / "frontend" / "build")
    component = components.declare_component(name=COMPONENT_NAME, path=build_dir)


# parent_dir = os.path.dirname(os.path.abspath(__file__))
# build_dir = os.path.join(parent_dir, "frontend/build")
# component = components.declare_component("ChatContainer", path=build_dir)

# Define a public function for the package,
# which wraps the caller to the frontend code

def ChatContainer(messages=[], key=None) -> int:
    component_value = component(messages=messages, key=key)
    return component_value