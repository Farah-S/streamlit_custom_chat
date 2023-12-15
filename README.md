# streamlit_custom_chat

Streamlit custom chat messages and container for the chat messages, takes an array of messages for an llm, where the array is configured as ["role":"", "content":"", "key":""]

## Installation instructions

```sh
pip install streamlit_custom_chat
```

## Usage instructions

```python
import streamlit as st

from streamlit_custom_chat import ChatContainer

value = ChatContainer(messages=[], key="")
```
