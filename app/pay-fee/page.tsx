"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CursorTrail } from "@/components/cursor-trail"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, Shield, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"

export default function PayFeePage() {
  return (
    <>
      <CursorTrail />
      <Navigation />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Pay Online <span className="text-primary">Fee</span>
              </h1>
              <p className="text-lg text-muted-foreground">Session 2025-26 • Secure Payment Portal</p>
            </div>

            {/* Payment Banner */}
            <Card className="mb-8 overflow-hidden border-primary/30">
              <div className="relative h-48 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/screenshot-202025-12-25-20152038.png"
                    alt="Pay School Fee Online"
                    width={600}
                    height={200}
                    className="object-contain opacity-80"
                  />
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Instructions */}
              <div className="lg:col-span-1 space-y-4">
                <Card className="p-6 border-border/50 bg-card/50 backdrop-blur">
                  <h2 className="text-xl font-semibold mb-4 text-foreground">Payment Instructions</h2>
                  <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary font-semibold">1.</span>
                      <span>Enter your admission number and date of birth</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-semibold">2.</span>
                      <span>Select the month you want to pay for</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-semibold">3.</span>
                      <span>Verify student details displayed</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-semibold">4.</span>
                      <span>Select payment method (Debit/Credit/Net Banking)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-semibold">5.</span>
                      <span>Complete payment and download receipt</span>
                    </li>
                  </ol>
                </Card>

                <Alert className="border-secondary/30 bg-secondary/5">
                  <AlertCircle className="h-4 w-4 text-secondary" />
                  <AlertDescription className="text-sm">
                    For queries: +91 9425163445 or email jpvdavkatni@ediffmail.com
                  </AlertDescription>
                </Alert>
              </div>

              {/* Payment Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 border-border/50 bg-card/50 backdrop-blur">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-foreground">Student Login</h2>
                      <p className="text-sm text-muted-foreground">Enter your credentials to proceed</p>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="admissionNumber">Admission Number / User ID *</Label>
                      <Input
                        id="admissionNumber"
                        placeholder="Enter your admission number"
                        className="text-base"
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">Format: ddmmyyyy (e.g., 01012020)</p>
                    </div>

                    <div>
                      <Label htmlFor="password">Date of Birth / Password *</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter DOB as password (ddmmyyyy)"
                        className="text-base"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="month">Select Month to Pay *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select month" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="april">April 2025</SelectItem>
                          <SelectItem value="may">May 2025</SelectItem>
                          <SelectItem value="june">June 2025</SelectItem>
                          <SelectItem value="july">July 2025</SelectItem>
                          <SelectItem value="august">August 2025</SelectItem>
                          <SelectItem value="september">September 2025</SelectItem>
                          <SelectItem value="october">October 2025</SelectItem>
                          <SelectItem value="november">November 2025</SelectItem>
                          <SelectItem value="december">December 2025</SelectItem>
                          <SelectItem value="january">January 2026</SelectItem>
                          <SelectItem value="february">February 2026</SelectItem>
                          <SelectItem value="march">March 2026</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" size="lg" className="w-full neon-glow">
                        <Shield className="mr-2 h-5 w-5" />
                        Proceed to Payment
                      </Button>
                    </div>
                  </form>

                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-xs text-muted-foreground text-center">
                      <strong>Important:</strong> Please ensure your card limit is sufficient. If transaction fails,
                      wait 3 days before retrying. Receipt will be auto-generated within 24 hours.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
