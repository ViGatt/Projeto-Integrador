import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [
  BtnPrimaryComponent,
  ReactiveFormsModule],
  providers: [
    NewsletterService
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.newsletterForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      endereço: new FormControl('', [Validators.required]),
      descrição: new FormControl('', [Validators.required])
    });

  }
  get nome (){ 
    return this.newsletterForm.get("nome")!;
  }
  get email (){ 
    return this.newsletterForm.get("email")!;
  }
  get endereço (){ 
    return this.newsletterForm.get("endereço")!;
  }
  get descrição (){ 
    return this.newsletterForm.get("descrição")!;
  }


  onSubmit(){
    this.loading.set(true);
    if(this.newsletterForm.valid){
      this.service.sendData(this.newsletterForm.value.nome, this.newsletterForm.value.email,this.newsletterForm.value.endereço,this.newsletterForm.value.descrição)
      .subscribe({
        next: () => {
          this.newsletterForm.reset();
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      })
    }
  }
}
