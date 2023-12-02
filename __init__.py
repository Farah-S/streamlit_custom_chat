import streamlit.components.v1 as components
from typing import Tuple

# Create a function _component_func which will call the frontend component when run
_component_func = components.declare_component(
    "CustomChatBubble",
    url="http://localhost:3000",  # Fetch frontend component from local webserver
)

_component_func = components.declare_component(
    "ChatContainer",
    url="http://localhost:3000",  # Fetch frontend component from local webserver
)

# Define a public function for the package,
# which wraps the caller to the frontend code
def Gridy(role: str="assistant", content: str="", key=None) -> int:
    component_value = _component_func(role=role, content=content, key=key)
    return component_value
def CustomChatBubble(role: str="assistant", content: str="", key=None) -> int:
    component_value = _component_func(role=role, content=content, key=key)
    return component_value

def ChatContainer(messages=[], key=None) -> int:
    component_value = _component_func(messages=messages, key=key)
    return component_value