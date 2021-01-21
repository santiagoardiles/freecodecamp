# --------------- freeCodeCamp --------------- #
#                                              #
#    VIDEO: https://youtu.be/JwSS70SZdyM       #
#    AUTHOR: Chanin Nantasenamat               #
#    LESSON: EDA Basketball                    #
#                                              #
# --------------- freeCodeCamp --------------- #


# --------------------
# Imports.
# --------------------
import streamlit as st
import pandas as pd
import base64
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np


# --------------------
# App title.
# --------------------
st.title("NBA Player Stats Explorer")

st.markdown(
    """
This app performs simple webscraping of NBA player stats data!
* **Python libraries:** base64, pandas, streamlit.
* **Data source:** [Sports Reference](https://www.basketball-reference.com/)
"""
)

st.sidebar.header("User Input Features")
selected_year = st.sidebar.selectbox("Year", list(reversed(range(1950, 2020))))


@st.cache
def load_data(year):
    url = (
        "https://www.basketball-reference.com/leagues/NBA_"
        + str(year)
        + "_per_game.html"
    )
    html = pd.read_html(url, header=0)
    df = html[0]
    raw = df.drop(df[df.Age == "Age"].index)
    raw = raw.fillna(0)
    player_stats = raw.drop(["Rk"], axis=1)
    return player_stats


player_stats = load_data(selected_year)


# --------------------
# Side bar.
# --------------------

# Sidebar - Team selection.
sorted_unique_team = sorted(player_stats.Tm.unique())
selected_team = st.sidebar.multiselect("Team", sorted_unique_team, sorted_unique_team)

# Sidebar - Position selection.
unique_pos = ["C", "PF", "SF", "PG", "SG"]
selected_pos = st.sidebar.multiselect("Position", unique_pos, unique_pos)

# Filtering data.
df_selected_team = player_stats[
    (player_stats.Tm.isin(selected_team)) & (player_stats.Pos.isin(selected_pos))
]

st.dataframe(df_selected_team)

# Download NBA player stats data.
# https://discuss.streamlit.io/t/how-to-download-filein-streamlit/1806
def filedownload(df):
    csv = df.to_csv(index=False)
    b64 = base64.b64encode(csv.encode()).decode()
    href = f"<a href='data:file/csv;base64,{b64}' download='player_stats.csv'>Download CSV File</a>"
    return href


# --------------------
# Heatmap.
# --------------------
if st.button("Intercorrelation Heatmap"):
    st.header("Intercorrelation Matrix Heatmap")
    df_selected_team.to_csv("output.csv", index=False)
    df = pd.read_csv("output.csv")

    corr = df.corr()
    mask = np.zeros_like(corr)
    mask[np.triu_indices_from(mask)] = True
    with sns.axes_style("white"):
        fig, ax = plt.subplots(figsize=(7, 5))
        ax = sns.heatmap(corr, mask=mask, vmax=1, square=True)
    st.pyplot(fig)