from pymongo import MongoClient
from langchain.embeddings.openai import OpenAIEmbeddings 
from langchain.vectorstores import MongoDBAtlasVectorSearch
from langchain.document_loaders import DirectoryLoader
from langchain.llms import OpenAI 
from langchain.chains import RetrievalQA 
import gradio as gr
from gradio. themes. base import Base 
import key_param as key_param

client = MongoClient(key_param.MONGO_URI)
dbName = "stGallen3"
collectionName = "embeddings"
collection = client[dbName][collectionName]

embeddings = OpenAIEmbeddings(openai_api_key=key_param.openai_api_key)

vectorStore = MongoDBAtlasVectorSearch(collection,embeddings)

#func that takes in statement and returns output

def query_data(query):
    docs = vectorStore.similarity_search(query, K=5)
    
    llm = OpenAI(openai_api_key=key_param.openai_api_key, temperature = 0, model= "gpt-3.5-turbo-instruct")
    retriever = vectorStore.as_retriever()
    qa = RetrievalQA.from_chain_type(llm, chain_type="stuff", retriever=retriever)
    retriever_output = qa.run(query)
    
    return retriever_output


#client.dbName.getIndexes()
# print(query_data("How i can find assistant with finding employment?"))