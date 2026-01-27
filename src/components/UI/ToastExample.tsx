"use client"

import { Button } from "@/components/UI/Button"
import { useToast } from "@/hooks/use-toast"

export function ToastExample() {
  const { toast } = useToast()

  return (
    <div className="space-x-2">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Success!",
            description: "Your action was completed successfully.",
            variant: "success",
          })
        }}
      >
        Success Toast
      </Button>
      
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Error!",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          })
        }}
      >
        Error Toast
      </Button>
      
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Warning!",
            description: "Please check your input and try again.",
            variant: "warning",
          })
        }}
      >
        Warning Toast
      </Button>
      
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Info",
            description: "This is an informational message.",
          })
        }}
      >
        Info Toast
      </Button>
    </div>
  )
}