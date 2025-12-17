from .prompts import prompt_template

class LLMClient:
    def __init__(self, dbcontext: str = ""):
        self.dbcontext = dbcontext
        raise NotImplementedError("This class should be overridden by subclasses.")
    
    def change_dbcontext(self, dbcontext: str):
        self.dbcontext = dbcontext

    def change_prompt(self, prompt_type: str):
        if prompt_type in prompt_template:
            self.prompt = prompt_template[prompt_type].format(dbcontext=self.dbcontext)
        else:
            raise ValueError(f"Prompt type '{prompt_type}' not recognized.")

    def generate_text(self, prompt: str) -> str:
        raise NotImplementedError("This method should be overridden by subclasses.")
    
    def generate_sql_query(self, prompt: str) -> str:
        raise NotImplementedError("This method should be overridden by subclasses.")
    
    def generate_data_answer(self, prompt: str) -> str:
        raise NotImplementedError("This method should be overridden by subclasses.")
    
    def generate_anomaly_report(self, prompt: str) -> str:
        raise NotImplementedError("This method should be overridden by subclasses.")