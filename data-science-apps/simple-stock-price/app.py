import yfinance as yf
import streamlit as st
import pandas as pd

# `st.write` uses Markdown syntax.
st.write(
    """ 
# Simple Stock Price App

Shown are the stock *closing price* and *volume* of ***Tesla***!
"""
)

# Defines the ticker symbol.
tickerSymbol = "TSLA"

# Gets data on this ticker.
tickerData = yf.Ticker(tickerSymbol)

# Gets the historical prices for this ticker.
tickerDf = tickerData.history(period="id", start="2010-05-31", end="2020-5-31")


st.write(
    """
## Closing Price
"""
)
st.line_chart(tickerDf.Close)

st.write(
    """
## Volume
"""
)
st.line_chart(tickerDf.Volume)