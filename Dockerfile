# Use the official Node.js image as the base  
FROM oven/bun 

# Set the working directory inside the container  
WORKDIR /app  

# Copy package.json and package-lock.json to the container  
COPY package*.json ./  

# Install dependencies  
RUN bun i 

# Copy the app source code to the container  
COPY . .  

# Build the Next.js app  
RUN bun run build  

# Expose the port the app will run on  
EXPOSE 3000  

# Start the app  
CMD ["bun","run", "start"]  