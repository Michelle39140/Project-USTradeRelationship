import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


# make connection to the SQLite database
engine = create_engine('sqlite:///db/data.sqlite')

switcher = {
    "0":'0 FOOD AND LIVE ANIMALS',
    "1":'1 BEVERAGES AND TOBACCO',
    "2":'2 CRUDE MATERIALS, INEDIBLE, EXCEPT FUELS',
    "3":'3 MINERAL FUELS, LUBRICANTS AND RELATED MATERIALS',
    "4":'4 ANIMAL AND VEGETABLE OILS, FATS AND WAXES',
    "5":'5 CHEMICALS AND RELATED PRODUCTS, N.E.S.',
    "6":'6 MANUFACTURED GOODS CLASSIFIED CHIEFLY BY MATERIAL',
    "7":'7 MACHINERY AND TRANSPORT EQUIPMENT',
    "8":'8 MISCELLANEOUS MANUFACTURED ARTICLES',
    "9":'9 COMMODITIES AND TRANSACTIONS NOT CLASSIFIED ELSEWHERE IN THE SITC'
}


@app.route("/")
def a():
    return render_template("index.html")


@app.route("/map")
def b():

    return render_template("map.html")

@app.route("/trade_flow")
def c():
    return render_template("trade_flow.html")
@app.route("/search")
def d():
    return render_template("search.html")

@app.route("/trend")
def e():
    return render_template("trend.html")

@app.route("/imports/<country>/<sitc>")
def imports(country,sitc):

    conn = engine.connect()

    sitc_str = switcher[sitc]
    df = pd.read_sql_table('Imports', conn)

    conn.close()

    df_gp=df.groupby(["country","sitc_num"]).sum()
    filtered = df_gp.loc[(country, sitc_str),]
    print(filtered)
    return jsonify(filtered.tolist())


@app.route("/exports/<country>/<sitc>")
def exports(country,sitc):
    conn = engine.connect()

    sitc_str = switcher[sitc]
    df = pd.read_sql_table('Exports', conn)

    conn.close()

    df_gp=df.groupby(["Country","SITC"]).sum()
    print(df_gp.loc[(country, sitc_str),])
    return jsonify(df_gp.loc[(country, sitc_str),].tolist())

if __name__ == "__main__":
    app.run()
