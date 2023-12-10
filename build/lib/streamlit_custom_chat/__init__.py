import streamlit.components.v1 as components
import os

# Create a function _component_func which will call the frontend component when run
# _component_func = components.declare_component(
#     "ChatContainer",
#     url="http://localhost:3000",  # Fetch frontend component from local webserver
# )

parent_dir = os.path.dirname(os.path.abspath(__file__))
build_dir = os.path.join(parent_dir, "frontend/build")
component = components.declare_component("ChatContainer", path=build_dir)

# Define a public function for the package,
# which wraps the caller to the frontend code

def ChatContainer(messages=[], key=None) -> int:
    component_value = component(messages=messages, key=key)
    return component_value