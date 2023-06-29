# import openai
# openai.api_key="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"

# def use(prompt):
#     response = openai.ChatCompletion.create(
#         model = "gpt-3.5-turbo",
#         message=[
#             {"role":"user", "content": prompt}
#         ]
#     )
#     return response['choices'][0]['message']['content']

# if __name__ == "__main__":
#     r = use('输入你的问题')
#     print(r)


# import openai
# openai.api_key = "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"  # supply your API key however you choose

# completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": "Hello world!"}])
# print(completion.choices[0].message.content)



# import os
# import openai
# openai.api_key = os.getenv("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")

# completion = openai.ChatCompletion.create(
#   model="gpt-3.5-turbo",
#   messages=[
#     {"role": "user", "content": "Hello!"}
#   ]
# )

# print(completion.choices[0].message)


import openai

# 填你的秘钥
openai.api_key = "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"

# 提问代码
def chat_gpt(prompt):
    # 你的问题
    prompt = prompt
    
    # 调用 ChatGPT 接口
    model_engine = "text-davinci-003"
    completion = openai.Completion.create(
        engine=model_engine,
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )

    response = completion.choices[0].text
    print(response)
if __name__ == "__main__":
    chat_gpt("hello")