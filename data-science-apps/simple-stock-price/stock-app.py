# --------------- freeCodeCamp --------------- #
#                                              #
#    VIDEO: https://youtu.be/JwSS70SZdyM       #
#    AUTHOR: Chanin Nantasenamat               #
#    LESSON: Simple Stock Price App            #
#                                              #
# --------------- freeCodeCamp --------------- #


# --------------------
# Imports libraries.
# --------------------
import yfinance as yf
import streamlit as st


# --------------------
# Page title.
# --------------------
# `st.write` uses Markdown syntax.
st.write(
    """ 
# Simple Stock Price App

Shown are the stock *closing price* and *volume* of ***Tesla***!
"""
)


# --------------------
# Fetchs data.
# --------------------
# Defines the ticker symbol.
tickerSymbol = "TSLA"

# Gets data on this ticker.
tickerData = yf.Ticker(tickerSymbol)

# Gets the historical prices for this ticker.
tickerDf = tickerData.history(period="id", start="2010-05-31", end="2020-5-31")


# --------------------
# Prints data.
# --------------------
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
