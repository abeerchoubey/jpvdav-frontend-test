"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CursorTrail } from "@/components/cursor-trail"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdmissionFormPage() {
  return (
    <>
      <CursorTrail />
      <Navigation />
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Admission <span className="text-primary">Form</span>
              </h1>
              <p className="text-lg text-muted-foreground">Academic Year 2025-26</p>
            </div>

            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur">
              <form className="space-y-6">
                {/* Student Information */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border/50 pb-2">
                    Student Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter last name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dob">Date of Birth *</Label>
                      <Input id="dob" type="date" required />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="class">Class Applying For *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="lkg">LKG</SelectItem>
                        <SelectItem value="ukg">UKG</SelectItem>
                        <SelectItem value="1">Class 1</SelectItem>
                        <SelectItem value="2">Class 2</SelectItem>
                        <SelectItem value="3">Class 3</SelectItem>
                        <SelectItem value="4">Class 4</SelectItem>
                        <SelectItem value="5">Class 5</SelectItem>
                        <SelectItem value="6">Class 6</SelectItem>
                        <SelectItem value="7">Class 7</SelectItem>
                        <SelectItem value="8">Class 8</SelectItem>
                        <SelectItem value="9">Class 9</SelectItem>
                        <SelectItem value="10">Class 10</SelectItem>
                        <SelectItem value="11">Class 11</SelectItem>
                        <SelectItem value="12">Class 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Parent Information */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border/50 pb-2">
                    Parent/Guardian Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fatherName">Father's Name *</Label>
                      <Input id="fatherName" placeholder="Enter father's name" required />
                    </div>
                    <div>
                      <Label htmlFor="motherName">Mother's Name *</Label>
                      <Input id="motherName" placeholder="Enter mother's name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Contact Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91 9876543210" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="example@email.com" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Residential Address *</Label>
                    <Textarea id="address" placeholder="Enter complete address" rows={3} required />
                  </div>
                </div>

                {/* Previous School Information */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground border-b border-border/50 pb-2">
                    Previous School Information
                  </h2>

                  <div>
                    <Label htmlFor="previousSchool">Previous School Name</Label>
                    <Input id="previousSchool" placeholder="Enter previous school name (if applicable)" />
                  </div>

                  <div>
                    <Label htmlFor="lastClass">Last Class Attended</Label>
                    <Input id="lastClass" placeholder="Enter last class attended" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-border/50">
                  <Button type="submit" size="lg" className="w-full neon-glow">
                    Submit Application
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    * Required fields. Our admissions team will contact you within 2-3 business days.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
