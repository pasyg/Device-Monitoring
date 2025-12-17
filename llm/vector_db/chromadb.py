import chromadb
from chromadb.api.types import EmbeddingFunction
from langchain_huggingface import HuggingFaceEmbeddings

PERSIST_DIR = "./chroma_db"

class HFEmbeddingFunction(EmbeddingFunction):
    def __init__(self, model_name: str = "sentence-transformers/all-MiniLM-L6-v2"):
        self.embedding = HuggingFaceEmbeddings(model_name=model_name)

    def __call__(self, texts: list[str]):
        return [self.embedding.embed_query(text) for text in texts]
    
def setup_chroma():
    client = chromadb.PersistentClient(path=PERSIST_DIR)
    embed_function = HFEmbeddingFunction()
    collection = client.get_or_create_collection(name="device_monitoring", embedding_function=embed_function)

    return client, collection
    