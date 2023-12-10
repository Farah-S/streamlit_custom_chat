import streamlit.components.v1 as components

# Create a function _component_func which will call the frontend component when run
_component_func = components.declare_component(
    "ChatContainer",
    url="http://localhost:3000",  # Fetch frontend component from local webserver
)

# Define a public function for the package,
# which wraps the caller to the frontend code

def ChatContainer(messages=[], key=None) -> int:
    component_value = _component_func(messages=messages, key=key)
    return component_value